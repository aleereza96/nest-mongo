import { Module } from '@nestjs/common'
import { ConfigModule, ConfigService } from '@nestjs/config'
import configs from './shared/config'
import { CoreModule } from './core/core.module'

@Module({
  imports: [
    ConfigModule.forRoot({
      load: configs,
      ignoreEnvFile: false,
      envFilePath: '.env',
      isGlobal: true,
      cache: true,
      expandVariables: true,
    }),
    CoreModule,
  ],
  providers: [ConfigService],
})
export class AppModule {}
