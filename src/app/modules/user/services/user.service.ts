import { Injectable } from '@nestjs/common'
import { CreateUserDto } from '../dto/create-user.dto'

@Injectable()
export class UserService {
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user'
  }

  getById(id: number) {
    return `This action returns a #${id} user`
  }

  remove(id: number) {
    return `This action removes a #${id} user`
  }
}
