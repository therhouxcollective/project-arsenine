import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import * as nats from 'nats';
import * as rxjs from 'rxjs';
import { DataResponse } from 'src/base/response';
import { MessageLogEntity } from 'src/messenger/entities/message-log.entity';
import { MessageModel } from 'src/messenger/models/message.model';
import { Repository } from 'typeorm';
@Injectable()
export class MessagesService {
    /**
     * 
     * @param messageLogRepository Links to the MessageLog table
     * @param client Allows the service to connect to the messaging queue
     */
    constructor(@InjectRepository(MessageLogEntity) private messageLogRepository: Repository<MessageLogEntity>, @Inject('banking') private client: ClientProxy) { }

    /**
     * handles the broadcasting and logging of the message to the MQ
     * @param userId The user's token
     * @param header The subscriber that will be listening for the message
     * @param payload The data that will be sent to 
     * @returns 
     */
    broadcastMessage$<PayloadType, ResponseType>(userId: string, header: string, payload: PayloadType): rxjs.Observable<DataResponse<ResponseType>> {
        return rxjs.from(
            this.messageLogRepository.save({ userId, payload: JSON.stringify(payload), cmd: header, createdDate: Date() })).pipe(rxjs.switchMap(result => {
                return this.client.send<DataResponse<ResponseType>>(header, payload);
            }));
    }
}
