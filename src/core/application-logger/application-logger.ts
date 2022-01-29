import { ConsoleLogger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ApplicationConfig } from '@nestjs/core';
import IApplicationConfig from 'src/config/interfaces/application-config.interface';
const fs = require('fs');

export class ApplicationLogger extends ConsoleLogger {
    file_logging: boolean;
    log_file_path: string;

    constructor(private configService: ConfigService) {
        super();
        this.file_logging = process.env.FILE_LOGGER === 'true';
        this.log_file_path = process.env.LOG_FILE_PATH || './application.log';
    }

    write(type: string, context: string, message: string) {
        var d = new Date();
        fs.writeFile(
            this.log_file_path,
            `${d.toLocaleDateString()} ${d.toLocaleTimeString()}       [${type}]    [${context}]        ${message}\n`,
            { flag: 'a+' },
            (err) => {
                if (err) {
                    return;
                }
            },
        );
    }

    log(message: any, context?: string): void {
        if (this.file_logging) this.write('LOG', context, message);

        super.log(message, context);
    }

    error(message: any, stack?: string): void {
        if (this.file_logging) this.write('ERROR', stack, message);

        super.error(message, stack);
    }

    // TODO: Implement Warning 
}
