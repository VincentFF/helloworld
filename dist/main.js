"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const dbInfo = {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT ?? '5432',
        user: process.env.DB_USER,
        password: process.env.DB_PASS ? '***' : undefined,
        database: process.env.DB_NAME,
    };
    console.log('[startup] DB config:', dbInfo);
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map