import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import IApplicationConfig from './config/interfaces/application-config.interface';


async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    const configService = app.get(ConfigService);
    const applicationConfig =
        configService.get<IApplicationConfig>('application');

    await app.listen(applicationConfig.port);
}

bootstrap();
