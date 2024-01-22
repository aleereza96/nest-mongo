import { registerAs } from '@nestjs/config'

export default registerAs('app', () => ({
  port: Number(process.env.PORT),
  apiPrefix: process.env.API_PREFIX,
}))
