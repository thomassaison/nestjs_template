import { registerAs } from '@nestjs/config';

export default registerAs('application', () => ({
    port: process.env.PORT || 8080,
    fileLogging: process.env.FILE_LOGGING === 'true' || false,
    logFilePath: process.env.LOG_FILE_PATH || './application.log',
}));
