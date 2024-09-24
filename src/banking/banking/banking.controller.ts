import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { of } from 'rxjs';
import { BankingService } from '../services/banking.service';

@Controller('banking')
export class BankingController {
  constructor(public bankingService: BankingService) {}

  @MessagePattern('account-statement')
  statement(@Payload() data: any) {
    return this.bankingService.getStatement$(data.userId);
  }

  @MessagePattern('account-balance')
  balance(@Payload() data: any) {

    return this.bankingService.accountBalance$(data.userId);
  }

  @MessagePattern('account-withdraw')
  withdraw(@Payload() data: any) {

    return this.bankingService.withdrawAmount$(data.userId, data.payload);
  }


  @MessagePattern('account-deposit')
  deposit(@Payload() data: any) {

    return this.bankingService.depositAmount$(data.userId, data.payload);
  }
}
