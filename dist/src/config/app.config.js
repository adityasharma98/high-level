"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.env = void 0;
exports.env = process.env.NODE_ENV || "staging";
const appConfig = {
    staging: { port: 3000 },
    production: { port: 3000 },
};
exports.default = appConfig[exports.env];
//# sourceMappingURL=app.config.js.map