import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import IApplicationConfig from './config/interfaces/application-config.interface';
import { ApplicationLogger } from './core/application-logger/application-logger';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        bufferLogs: true
    });
    const configService = app.get(ConfigService);
    const applicationConfig =
        configService.get<IApplicationConfig>('application');

    app.useLogger(app.get(ApplicationLogger));

    await app.listen(applicationConfig.port);
}

bootstrap();
