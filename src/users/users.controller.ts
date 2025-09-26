import { Body, Controller, Get,Delete , Param, Post, Query, Patch, UseInterceptors, } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-users.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dtos/update-users.dto';
import { SerializeInterceptor } from 'src/interceptors/serialize.interceptor';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
   
  @UseInterceptors(SerializeInterceptor)
  @Get()
  findAllUsers(@Query('email') email:string){
    return this.userService.find(email);
  }



  @Post()
  async createUser(@Body() body: CreateUserDto) {
    return await this.userService.create(body.name, body.email, body.password);
  }

  @UseInterceptors(SerializeInterceptor)
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
