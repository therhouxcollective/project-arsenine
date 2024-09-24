export class DataResponse<T>{
    public isError?:boolean;
    public data?: T;
    public message?: string;
}