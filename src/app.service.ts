import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class AppService {
    getHello(): string {
        Logger.log(AppService.name, 'OKIOKI');
        return 'Hello World from NFT!';
    }
}
