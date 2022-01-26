import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { CoreModule } from './core/core.module';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import applicationConfig from './config/application.config';

@Module({
    imports: [
        ApiModule,
        CoreModule,
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
            load: [applicationConfig],
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
