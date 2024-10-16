export class CustomError extends Error {
    statusCode: number;
    message: string;
    redirectTo?: string;
    success : boolean;
    constructor(statusCode: number, message: string, success : boolean, redirectTo?: string, ) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.success = success;
        this.redirectTo = redirectTo;
    }
}