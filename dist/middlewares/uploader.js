"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploader = void 0;
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const uploader = (directory, filePrefix) => {
    // default target loc
    const defaultDir = path_1.default.join(__dirname, '../../public');
    // configure disk storage
    const configureStoreFile = multer_1.default.diskStorage({
        destination: (req, file, callback) => {
            const fileDestination = defaultDir + directory;
            callback(null, fileDestination);
        },
        filename: (req, file, callback) => {
            if (filePrefix) {
                const existName = file.originalname.split('.');
                // file type: jpg, png, webp
                const fileType = existName[existName.length - 1];
                const newFileName = `${filePrefix}${Date.now()}.${fileType}`;
                callback(null, newFileName);
            }
            else {
                callback(null, file.originalname);
            }
        },
    });
    return (0, multer_1.default)({ storage: configureStoreFile });
};
exports.uploader = uploader;
