import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { LoginCredentials, UserDto } from 'src/identity/models/user';
import { TransactionDto } from 'src/banking/models/banking';

@Injectable()
export class BankingGatewayService {
    constructor(@Inject('banking') private readonly banking: ClientProxy,) {}

    createAccount$(user: UserDto) {
        return this.banking.send<any>('create-account', { userId: '', payload: user });
    }

    login$(loginCredentials: LoginCredentials) {
        return this.banking.send<any>('login', { userId: '', payload: loginCredentials });
    }

    logout$(token: string) {
        return this.banking.send<any>('logout', { userId: token, payload: {} });
    }

    getStatement$(token: string) {
        return this.banking.send<any>('get-statement', { userId: token, payload: {} });
    }

    depositAmount$(token: string, transaction: TransactionDto) {
        return this.banking.send<any>('deposit-amount', { userId: token, payload: transaction });
    }

    getBalance$(token: string) {
        return this.banking.send<any>('get-balance', { userId: token });
    }

    withdrawMoney$(token: string, transaction: TransactionDto) {
        return this.banking.send<any>('withdraw-amount', { userId: token, payload: transaction });
    }
}
