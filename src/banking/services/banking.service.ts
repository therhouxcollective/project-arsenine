import { Injectable } from '@nestjs/common';
import { Observable, from, map, of, switchAll, switchMap } from 'rxjs';
import { TransactionDto } from '../models/banking';
import { MessagesService } from 'src/messenger/services/messages.service';
import { StatementEntity } from '../entities/statement.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DataResponse } from 'src/base/response';

@Injectable()
export class BankingService {
    /**
     * 
     * @param messageService The Messaging service
     * @param statementRepository Connection to the Statement table
     */
    constructor(public messageService: MessagesService, @InjectRepository(StatementEntity) private statementRepository: Repository<StatementEntity>) { }

    /**
     * 
     * @param token User token that's generated on login
     * @returns {Observable<DataResponse>} publishes a message, that get's the user id, and returns the statement
     */
    getStatement$(token: string) {
        return this.messageService.broadcastMessage$<string, string>(token, 'get-user-id', '').pipe(switchMap((userIdRes) => {
            if (userIdRes.isError) {
                return of(userIdRes);
            }
            return from(this.statementRepository.findBy({ userId: userIdRes.data })).pipe(map((getStatementRes) => {
                return { data: getStatementRes };
            }));
        }));
    }

    /**
     * 
     * @param token User token that's generated on login
     * @returns {Observable<DataResponse>} publishes a message, that get's the user id, and returns the balance
     */
    accountBalance$(token: string): Observable<any> {
        return this.messageService.broadcastMessage$<string, string>(token, 'get-user-id', '').pipe(switchMap((userIdRes) => {
            if (userIdRes.isError) {
                return of(userIdRes);
            }
            return from(this.statementRepository.sum('amount', { userId: userIdRes.data })).pipe(map(sumRes => {
                return { isError: sumRes == null, data: sumRes }
            }));
        }));
    }

    /**
     * 
     * @param token User token that's generated on login
     * @returns {Observable<DataResponse>} publishes a message, that get's the user id, and performs a withdrawal transaction
     */
    withdrawAmount$(token: string, transaction: TransactionDto) {
        return this.messageService.broadcastMessage$<string, string>(token, 'get-user-id', '').pipe(switchMap((userIdRes) => {
            if (userIdRes.isError) {
                return of(userIdRes);
            }

            return this.accountBalance$(token).pipe(switchMap((balRes) => {

                if (balRes.data < transaction.amount) {
                    return of({ isError: true, message: 'Insufficent funds.' });
                }

                return from(this.statementRepository.save({ userId: userIdRes.data, atmId: transaction.atmId, amount: -transaction.amount })).pipe(map((saveRes) => {
                    return { data: saveRes };
                }));
            }));
        }));
    }

    /**
     * 
     * @param token User token that's generated on login
     * @returns {Observable<DataResponse>} publishes a message, that get's the user id, and performs a deposit transaction
     */
    depositAmount$(token: string, transaction: TransactionDto) {
        return this.messageService.broadcastMessage$<string, string>(token, 'get-user-id', '').pipe(switchMap((userIdRes) => {
            if (userIdRes.isError) {
                return of(userIdRes);
            }
            return from(this.statementRepository.save({ userId: userIdRes.data, atmId: transaction.atmId, amount: transaction.amount })).pipe(switchMap((depositRes) => {
                return this.accountBalance$(userIdRes.data);
            }));
        }));
    }
}
