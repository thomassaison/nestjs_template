import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ApiModule } from './api/api.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import applicationConfig from './config/application.config';
import databaseConfig from './config/database.config';
import { CoreModule } from './core/core.module';

@Module({
    imports: [
        ApiModule,
        CoreModule,
        ConfigModule.forRoot({
            isGlobal: true,
            envFilePath: '.env',
            load: [applicationConfig, databaseConfig],
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
