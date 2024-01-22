import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common'
import { UserService } from '../services/user.service'
import { CreateUserDto } from '../dto/create-user.dto'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.create(createUserDto)
  }

  @Get(':id')
  getById(@Param('id') id: string) {
    return this.userService.getById(+id)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id)
  }
}
