import { NestFactory } from '@nestjs/core'
import { AppModule } from './app/app.module'
import { ConfigService } from '@nestjs/config'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get(ConfigService)

  app.setGlobalPrefix(configService.get('app.apiPrefix'))

  const port = configService.get('app.port')
  await app.listen(port)
}
bootstrap()
