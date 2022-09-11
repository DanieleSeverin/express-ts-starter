"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logError = void 0;
const promises_1 = __importDefault(require("fs/promises"));
function logError(err) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let content = '';
            if (err)
                content = err.message + '\n' + err.stack;
            else
                content = 'Unknown message. ';
            content += `\nDateTime: ${new Date()} \n\n`;
            yield promises_1.default.writeFile('./Errors.txt', content, { flag: 'a+' });
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.logError = logError;
