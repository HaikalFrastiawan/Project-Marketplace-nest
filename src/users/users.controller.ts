import { Body, Controller, Get,Delete , Param, Post, Query, Patch,   } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-users.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dtos/update-users.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UserDto } from './dtos/user.dto';

@Controller('users')
@Serialize(UserDto)
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

  
  @Patch('/:id')
  updateUser(@Param('id') id: string, @Body() body: UpdateUserDto){
    return this.userService.update(parseInt(id), body);
  }


  @Delete('/:id')
  removeUser(@Param('id') id: string){
    return this.userService.remove(parseInt(id)); 
  }

}
