import { CustomError } from './custom-error';
export class InvalidRequestError extends CustomError {
  statusCode = 400;
  constructor(public message: string) {
    super(message);

    // Only because we are extending a built in class
    Object.setPrototypeOf(this, InvalidRequestError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }

}