import errors from "@lib/errors";
import CustomError from "@lib/errors/CustomError";
import { ValidationError } from "class-validator";
import { NextFunction, Request, Response } from "express";

export default (err: CustomError | Error | Error[], req: Request, res: Response, next: NextFunction) => {
  let customError = null;

  if (Array.isArray(err) && err[0] instanceof ValidationError) {
    console.log(`[${req.method}] ${req.path}`, err);

    customError = new CustomError(errors.WrongRequest);
  } else if (err instanceof CustomError) {
    console.log(`[${req.method}] ${req.path}`, err);

    customError = err;
  } else {
    console.log(`[${req.method}] ${req.path}`, err);

    customError = new CustomError(errors.SeverError);
  }

  const { code, message } = customError;

  res.status(code).json({
    status: code,
    message,
  });
};