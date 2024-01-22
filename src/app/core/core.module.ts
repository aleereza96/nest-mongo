import { Module } from '@nestjs/common'
import { DatabaseModule } from './database/database.module'
import { RabbitMQModule } from './rabbitmq/rabbitmq.module'

@Module({
  imports: [DatabaseModule, RabbitMQModule],
})
export class CoreModule {}
