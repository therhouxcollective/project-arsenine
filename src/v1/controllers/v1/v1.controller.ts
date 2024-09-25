import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { Observable, delay, of } from 'rxjs';
import { LoginCredentials, UserDto } from '../../../identity/models/user.model';
import { BankingGatewayService } from 'src/v1/services/banking.service';
import { TransactionDto } from 'src/banking/models/banking';
import { DataResponse } from 'src/base/response';

@Controller('v1/banking')
export class V1Controller {

  /**
   * 
   * @param bankingService The banking service
   */
  constructor(public bankingService: BankingGatewayService) { }
  
  /**
   * Stores the user information
   * @param userDTO User data to be stored into the database
   * @returns {Observable<DataResponse<any>>} the account created response
   */
  @Post("/new-account")
  newAccount(@Body() userDTO: UserDto): Observable<DataResponse<any>> {
    return this.bankingService.createAccount$(userDTO);
  }

  /**
   * perform's the login functionality
   * @param loginCredentials User login credentials
   * @returns {Observable<DataResponse<any>>} The user's login token
   */
  @Post("/login")
  login(@Body() loginCredentials: LoginCredentials): Observable<DataResponse<any>> {
    return this.bankingService.login$(loginCredentials);
  }

  /**
   * Log's the user out of the system
   * @param token The token that the user used
   * @returns {Observable<DataResponse<any>>} The logout message
   */
  @Post("/logout/:token")
  logout(@Param('token') token: string,): Observable<DataResponse<any>> {
    return this.bankingService.logout$(token);
  }

  /**
   * Get's the user's balance
   * @param token The user token
   * @param transaction The transaction information
   * @returns {Observable<DataResponse<any>>} the result of the transaction
   */
  @Get("/get-statement/:token")
  getStatement(@Param('token') token: string,): Observable<DataResponse<any>> {
    return this.bankingService.getStatement$(token);
  }

  /**
   * Get's the user's ballance
   * @param token The user token
   * @param transaction The transaction information
   * @returns {Observable<DataResponse<any>>} the result of the transaction
   */
  @Get("/get-balance/:token")
  getBalance(@Param('token') token: string,): Observable<DataResponse<any>> {
    return this.bankingService.getBalance$(token);
  }

  /**
   * Performs the deposit transaction
   * @param token The user token
   * @param transaction The transaction information
   * @returns {Observable<DataResponse<any>>} the result of the transaction
   */
  @Post("/deposit-amount/:token")
  deposit(@Param('token') token: string, @Body() transaction: TransactionDto): Observable<DataResponse<any>> {
    return this.bankingService.depositAmount$(token, transaction);
  }

  /**
   * Performs the withdrawal transaction
   * @param token The user token
   * @param transaction The transaction information
   * @returns {Observable<DataResponse<any>>} the result of the transaction
   */
  @Post("/withdraw-amount/:token")
  withdraw(@Param('token') token: string, @Body() transaction: TransactionDto): Observable<DataResponse<any>> {
    return this.bankingService.withdrawMoney$(token, transaction);
  }
}


