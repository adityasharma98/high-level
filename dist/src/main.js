"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const app_config_1 = require("./config/app.config");
const class_validator_1 = require("class-validator");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: true,
    });
    (0, class_validator_1.useContainer)(app.select(app_module_1.AppModule), { fallbackOnErrors: true });
    app.enableShutdownHooks();
    app.enableVersioning({
        type: common_1.VersioningType.URI,
    });
    app.useGlobalPipes(new common_1.ValidationPipe());
    const options = new swagger_1.DocumentBuilder()
        .setTitle("API")
        .setDescription("API docs")
        .setVersion("1.0")
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup("docs", app, document);
    let port = app_config_1.default.port;
    await app.listen(app_config_1.default.port);
}
void bootstrap();
//# sourceMappingURL=main.js.map