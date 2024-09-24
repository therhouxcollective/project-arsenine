import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { delay, of } from 'rxjs';
import { LoginCredentials, UserDto } from '../../../identity/models/user';
import { BankingGatewayService } from 'src/v1/services/banking/banking.service';
import { TransactionDto } from 'src/banking/models/banking';

@Controller('v1/banking')
export class V1Controller {
  constructor(public bankingService: BankingGatewayService) {

  }

  @Post("/new-account")
  newAccount(@Body() userDTO: UserDto) {
    return this.bankingService.createAccount$(userDTO);
  }

  @Post("/login")
  login(@Body() loginCredentials: LoginCredentials) {
    return this.bankingService.login$(loginCredentials);
  }

  @Post("/logout/:token")
  logout(@Param('token') token: string,) {
    return this.bankingService.logout$(token);
  }

  @Get("/get-statement/:token")
  getStatement(@Param('token') token: string,) {
    return this.bankingService.getStatement$(token);
  }

  @Get("/get-balance/:token")
  getBalance(@Param('token') token: string,) {
    return this.bankingService.getBalance$(token);
  }

  @Post("/deposit-amount/:token")
  deposit(@Param('token') token: string, @Body() transaction: TransactionDto) {
    return this.bankingService.depositAmount$(token, transaction);
  }
  
  @Post("/withdraw-amount/:token")
  withdraw(@Param('token') token: string, @Body() transaction: TransactionDto) {
    return this.bankingService.withdrawMoney$(token, transaction);
  }
}


