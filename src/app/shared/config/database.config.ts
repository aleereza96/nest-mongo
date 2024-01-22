import { registerAs } from '@nestjs/config'


const config = {
  uri: process.env.MONGO_URI,
}

export default registerAs('database', () => config)
