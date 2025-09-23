import { Body, Controller, Get,Delete , Param, Post, Query } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  findAllUsers(@Query('email') email:string){
    return this.userService.find(email);
  }


  @Post()
  async createUser(@Body() body: CreateUserDto) {
    return await this.userService.create(body.name, body.email, body.password);
  }

  @Get('/:id')
  findUser(@Param('id') id: string){
    return this.userService.findOneBy(parseInt(id));
  }

  @Delete('/:id')
  removeUser(@Param('id') id: string){
    return this.userService.remove(parseInt(id));
  }

}
