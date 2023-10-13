"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerMiddleWare = void 0;
const cls_hooked_1 = require("cls-hooked");
const session = (0, cls_hooked_1.createNamespace)("request-session");
const loggerMiddleWare = async (req, res, next) => {
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
exports.loggerMiddleWare = loggerMiddleWare;
//# sourceMappingURL=request.logger.js.map