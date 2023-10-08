import dotenvFlow from 'dotenv-flow'
import { ValidationPipe } from '@nestjs/common'
import { PrismaService } from 'nestjs-prisma'
import cookieParser from 'cookie-parser'
import { NestFactory } from '@nestjs/core'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { AppModule } from './app.module'

async function bootstrap(): Promise<void> {
    dotenvFlow.config()

    const app = await NestFactory.create(AppModule, {
        rawBody: true
    })
    app.useGlobalPipes(new ValidationPipe())
    app.use(cookieParser())
    app.enableCors({
        origin: [process.env['FRONTEND_URL']!],
        credentials: true,
    })

    const prismaService: PrismaService = app.get(PrismaService,)
    await prismaService.enableShutdownHooks(app,)
    const config = new DocumentBuilder()
        .setTitle('API',)
        .setDescription('Description',)
        .setVersion('1.0',)
        .build()

    const document = SwaggerModule.createDocument(app, config)
    SwaggerModule.setup('api', app, document)

    await app.listen(process.env['PORT'] ?? 4200)
}

bootstrap()
