import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ApplicationConfig } from '@nestjs/core';
import { ApplicationLogger } from './application-logger';

@Module({
    providers: [ApplicationLogger],
    exports: [ApplicationLogger],
    imports: [ConfigModule],
})
export class ApplicationLoggerModule {}
