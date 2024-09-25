import { BaseDto } from 'src/base/base.dto';

export class MessageModel<T> {
    public userId: string;
    public payload: T;
}
