import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { connect, Connection, Channel } from 'amqplib'

@Injectable()
export class RabbitMQService {
  private connection: Connection
  private channel: Channel

  constructor(private readonly configService: ConfigService) {
    this.init()
  }

  async init() {
    try {
      const rabbitMQUrl = this.configService.get('rabbitmq.url')
      this.connection = await connect(rabbitMQUrl)
      this.channel = await this.connection.createChannel()
    } catch (error) {
      console.error('Error connecting to RabbitMQ:', error)
    }
  }

  async publish(queue: string, msg: any) {
    try {
      await this.channel.assertQueue(queue, { durable: false })
      this.channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)))
    } catch (error) {
      console.error('Error publishing message:', error)
    }
  }
}
