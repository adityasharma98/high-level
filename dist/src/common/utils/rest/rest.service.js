"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestApiService = void 0;
const axios_1 = require("axios");
const constants_1 = require("../../../constants");
class RestApiService {
    static async callApi(method, url, data, headers, timeout) {
        let response;
        axios_1.default.defaults.timeoutErrorMessage = "TIMEOUT_ERROR";
        switch (method) {
            case "GET":
                response = (await axios_1.default.get(url, {
                    headers: Object.assign({ "Content-Type": "application/json" }, headers),
                    timeout: timeout,
                })).data;
                break;
            case "POST":
                response = (await axios_1.default.post(url, data, {
                    headers: Object.assign({ "Content-Type": "application/json" }, headers),
                    timeout: timeout,
                })).data;
                break;
            case "PUT":
                response = (await axios_1.default.put(url, data, {
                    headers: Object.assign({ "Content-Type": "application/json" }, headers),
                    timeout: timeout,
                })).data;
                break;
            case "DELETE":
                response = (await axios_1.default.delete(url, {
                    headers: Object.assign({ "Content-Type": "application/json" }, headers),
                    timeout: timeout,
                })).data;
                break;
            default:
                throw new Error(`Invalid HTTP method: ${method}`);
        }
        return response;
    }
    static async get(url, headers, timeout) {
        return this.callApi(constants_1.RestMethods.GET, url, null, headers, timeout);
    }
    static async post(url, data, headers, timeout) {
        return this.callApi(constants_1.RestMethods.POST, url, data, headers, timeout);
    }
    static async put(url, data, headers, timeout) {
        return this.callApi(constants_1.RestMethods.PUT, url, data, headers, timeout);
    }
    static async delete(url, headers, timeout) {
        return this.callApi(constants_1.RestMethods.DELETE, url, null, headers, timeout);
    }
}
exports.RestApiService = RestApiService;
//# sourceMappingURL=rest.service.js.map