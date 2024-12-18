"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseHandler {
    success(res, message, rc = 200, result) {
        return res.status(rc).send({
            rc,
            message,
            success: true,
            result,
        });
    }
    error(res, message, rc, error) {
        return res.status(rc).send({
            rc,
            message,
            success: false,
            error,
        });
    }
}
exports.default = new ResponseHandler();
