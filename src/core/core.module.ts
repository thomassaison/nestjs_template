import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { ApplicationLoggerModule } from './application-logger/application-logger.module';

@Module({
  imports: [AuthModule, ApplicationLoggerModule]
})
export class CoreModule {}
