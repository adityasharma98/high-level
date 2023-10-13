import { Request, Response, NextFunction } from "express";
import { createNamespace } from "cls-hooked";

const session = createNamespace("request-session");
export const loggerMiddleWare = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  session.run(() => {
    session.set("originalUrl", req.originalUrl);
    session.set("baseUrl", req.baseUrl);
    session.set("url", req.url);
    session.set("params", req.params);
    session.set("method", req.method);
    session.set("body", req.body);
    session.set("ip", req.ip);
    session.set("hostname", req.hostname);
    next();
  });
};
