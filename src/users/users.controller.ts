import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Post()
  async createUser(@Body() body: CreateUserDto) {
    return await this.userService.create(body.name, body.email, body.password);
     }
}
