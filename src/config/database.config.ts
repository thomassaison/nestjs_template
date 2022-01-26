import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
    port: process.env.DATABASE_PORT || 5432,
    user: process.env.DATABASE_USER || 'postgres',
    name: process.env.DATABASE_NAME || 'postgres',
    pass: process.env.DATABASE_PASS || 'mysecretpassword',
    host: process.env.DATABASE_HOST || 'localhost',
}));
