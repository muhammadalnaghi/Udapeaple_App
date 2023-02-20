"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const winston = require("winston");
const winston_loggly_bulk_1 = require("winston-loggly-bulk");
const winston_slack_webhook_1 = require("winston-slack-webhook");
const dotenv = require("dotenv");
dotenv.config();
const logglySubdomain = process.env.LOGGLY_SUBDOMAIN;
const logglyToken = process.env.LOGGLY_TOKEN;
const getLogglyTransport = () => {
    return new winston_loggly_bulk_1.Loggly({
        subdomain: logglySubdomain,
        token: logglyToken,
        tags: ['glee2-backend'],
        level: process.env.LOGGLY_LEVEL || 'info',
        json: true,
        isBulk: true,
    });
};
const getSlackTransport = () => {
    const webhookUrl = process.env.SLACK_LOGGER_WEBHOOK;
    if (!webhookUrl)
        return;
    const channel = process.env.SLACK_LOGGER_CHANNEL;
    const username = process.env.SLACK_LOGGER_USERNAME;
    const iconUrl = process.env.SLACK_LOGGER_ICON_URL;
    return new winston_slack_webhook_1.SlackWebHook({
        level: 'error',
        webhookUrl,
        channel,
        username: username || 'Logger',
        iconUrl: iconUrl ||
            'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Emblem-important-red.svg/500px-Emblem-important-red.svg.png',
    });
};
let AppLogger = class AppLogger {
    constructor() {
        const logConsole = new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            format: winston.format.simple(),
        });
        const transports = [logConsole];
        const hasLogglyConfig = logglySubdomain && logglyToken;
        if (hasLogglyConfig) {
            transports.push(getLogglyTransport());
        }
        const slackTransport = getSlackTransport();
        if (slackTransport) {
            transports.push(slackTransport);
        }
        this.logger = winston.createLogger({
            transports,
        });
    }
    log(message) {
        this.logger.log('debug', { message });
    }
    error(message, trace = '', context = '') {
        this.logger.error({ message, trace, context });
    }
    warn(message) {
        this.logger.warn({ message });
    }
    info(message) {
        this.logger.info({ message });
    }
    debug(message) {
        this.logger.debug({ message });
    }
};
AppLogger = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], AppLogger);
exports.AppLogger = AppLogger;
//# sourceMappingURL=app.logger.js.map