import { BaseDto } from 'src/base/base.dto';

export class Message<T> {
    public id: string;
    public userId: string;
    public payload: T;
}
