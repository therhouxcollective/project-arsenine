import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Observable, of } from 'rxjs';
import { BankingService } from '../services/banking.service';
import { MessageModel } from 'src/messenger/models/message.model';

/**
 * This is a pubsub for the banking functionality in the MQ
 */
@Controller('banking')
export class BankingController {
  /**
   * 
   * @param bankingService Banking Service
   */
  constructor(public bankingService: BankingService) { }

  /**
   *
   * @param data The account payload
   * @returns {Observable} Publishes the statement from the publisher
   */
  @MessagePattern('account-statement')
  statement$(@Payload() data: MessageModel<any>) {
    return this.bankingService.getStatement$(data.userId);
  }

  /**
   * 
   * @param {any} data The account payload
   * @returns {Observable} Publishes the account balance 
   */
  @MessagePattern('account-balance')
  accountBalance$(@Payload() data: MessageModel<any>) {
    return this.bankingService.accountBalance$(data.userId);
  }

  /**
   * 
   * @param data The account payload
   * @returns {Observable} Publishes the result of the withdrawal process
   */
  @MessagePattern('account-withdraw')
  withdrawFunds$(@Payload() data: MessageModel<any>) {

    return this.bankingService.withdrawAmount$(data.userId, data.payload);
  }

  /**
   * 
   * @param data The account payload
   * @returns 
   */
  @MessagePattern('account-deposit')
  deposit(@Payload() data: MessageModel<any>) {

    return this.bankingService.depositAmount$(data.userId, data.payload);
  }
}
