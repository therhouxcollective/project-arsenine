import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Observable, from, map, of, switchMap } from 'rxjs';
import { DataResponse } from 'src/base/response';
import { LoginCredentials, UserDto } from 'src/identity/models/user.model';
import * as crypto from 'crypto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './../entities/user.entity';
import { Repository } from 'typeorm';
import { LoginEntity } from '../entities/login.entity';

@Injectable()
export class AuthService {
    private salt: string;
    constructor(private configService: ConfigService, @InjectRepository(UserEntity) private userRepository: Repository<UserEntity>, @InjectRepository(LoginEntity) private loginRepository: Repository<LoginEntity>) {

        console.log(configService.get('SALT'))
        this.salt = 'arsenide'
    }

    /**
     * Logs the user out of the system
     * @param loginToken The user's token
     * @returns {Observable<DataResponse<any>>} The response from the transaction
     */
    logout$(loginToken: string) {
        return from(this.loginRepository.delete({ loginToken })).pipe(switchMap((delRes) => {
            return of({ message: delRes.affected == 1 ? 'Logged out successfully' : 'Unable to logout' });
        }));
    }

    /**
     * Creates a new user in the system
     * @param user User Information
     * @returns {Observable<DataResponse<any>>} Response from the user created transation
     */
    createUser$(user: UserDto): Observable<DataResponse<any>> {

        return from(this.userRepository.save({
            username: user.username, name: user.name,
            surname: user.surname, password: crypto.pbkdf2Sync(user.password, this.salt, 10000, 64, 'sha512').toString('hex')
        })).pipe(map((createUserRes) => {
            if (createUserRes == null) {
                return { isError: true, message: 'Unable to create this user' };
            }
            return { message: 'User created successfully' };
        }));
    }

    /**
     * Request the user's information
     * @param token user token
     * @returns {Observable<DataResponse<any>>} the user's id
     */
    getUserId$(token: string): Observable<DataResponse<any>> {
        return from(this.loginRepository.findOne({ where: { loginToken: token } })).pipe(map((userIdRes) => {
            if (userIdRes == null) {
                return ({ isError: true, message: 'Unable to retrieve the record' })
            }
            return { isError: false, data: userIdRes.loginToken };
        }));
    }

    /**
     * Log's the user into the system
     * @param loginCredentials User's username and password
     * @returns {Observable<DataResponse<any>>} The user's token
     */
    login$(loginCredentials: LoginCredentials) {
        return from(this.userRepository.findOne({ where: { username: loginCredentials.username, password: crypto.pbkdf2Sync(loginCredentials.password, this.salt, 10000, 64, 'sha512').toString('hex') } })).pipe(switchMap((queryRes) => {
            if (queryRes == null) {
                return of({ isError: true, message: 'Unable to login. Please check your credentials, and try again' });
            }
            return from(this.loginRepository.save({
                userId: queryRes.id,
                loginToken: crypto.pbkdf2Sync(queryRes.password + 'true', this.salt, 10000, 64, 'sha512').toString('hex')
            })
            ).pipe(map((res) => {
                return { data: res.loginToken };
            }));
        }));
    }

}
