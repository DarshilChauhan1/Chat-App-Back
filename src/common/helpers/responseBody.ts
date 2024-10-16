export class ResponseBody {
    statusCode : number;
    message : string;
    data ?: any;
    success : boolean;

    constructor(statusCode : number, message : string, success : boolean, data ?: any){
        this.statusCode = statusCode;
        this.message = message;
        this.data = data;
        this.success = success;
    }

}