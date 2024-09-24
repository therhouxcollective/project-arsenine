import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable, from, map, of, switchMap } from 'rxjs';
import { DataResponse } from 'src/base/response';
import { LoginCredentials, UserDto } from 'src/identity/models/user';
import * as crypto from 'crypto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity} from './../entities/user.entity';
import { Repository } from 'typeorm';
import { LoginEntity } from '../entities/login.entity';

@Injectable()
export class AuthService {
    salt: string = 'arsenide';
    constructor(private configService: ConfigService, @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>, @InjectRepository(LoginEntity) private loginRepository: Repository<LoginEntity>){

    }

    logout$(loginToken: string){
        return from(this.loginRepository.delete({loginToken})).pipe(switchMap((delRes) =>{
            return of({message: delRes.affected == 1? 'Logged out successfully': 'Unable to logout'});
        }));
    }

    createUser$(user: UserDto): Observable<DataResponse<any>>{

       return from(this.userRepository.save({username: user.username, name: user.name, 
            surname: user.surname, password:  crypto.pbkdf2Sync(user.password, this.salt , 10000, 64, 'sha512').toString('hex')})).pipe(map((createUserRes) =>{
                if(createUserRes == null){
                    return {isError: true, message: 'Unable to create this user'};
                }
                return { message: 'User created successfully'};
            }));
    }

    getUserId$(token: string){
        return from(this.loginRepository.findOne({where: {loginToken: token}})).pipe(map((userIdRes) =>{
            if(userIdRes == null){
                return of({isError: true, message: 'Unable to retrieve the record'})
            }
            return {isError: false, data: userIdRes.loginToken};
        }));
    }
    //todo

    login$(loginCredentials: LoginCredentials){
        return from(this.userRepository.findOne({where: {username: loginCredentials.username, password: crypto.pbkdf2Sync(loginCredentials.password, this.salt , 10000, 64, 'sha512').toString('hex')}})).pipe(switchMap((queryRes)=>{
            if(queryRes == null){
                return of({isError: true, message: 'Unable to login. Please check your credentials, and try again'});
            }
            return from(this.loginRepository.save({ 
                userId: queryRes.id, 
                loginToken: crypto.pbkdf2Sync(queryRes.password+'true', this.salt , 10000, 64, 'sha512').toString('hex')
            })
                ).pipe(map((res) =>{
                return {data: res.loginToken};
            }));
        }));
    }

}
