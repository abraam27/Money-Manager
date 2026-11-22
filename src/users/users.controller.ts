import { Controller, Get, Param, Post, Query, Patch } from '@nestjs/common';
import { Body } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common';
import { DefaultValuePipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UpdateUserDto } from './dtos/update-user.dto';
import { UsersService } from './providers/users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}
    @Get()
    getUsers(@Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number, @Query('offset', new DefaultValuePipe(0), ParseIntPipe) offset: number) {
        return this.usersService.findAll();
    }

    @Get(':id')
    getUser(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.findOne(id);
    }

    @Post()
    createUser(@Body() createUserDto: CreateUserDto) {
        console.log(createUserDto instanceof CreateUserDto);
        return this.usersService.create(createUserDto);
    }

    @Patch(':id')
    updateUser(@Param('id', ParseIntPipe) id: number, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.update(id, updateUserDto);
    }
}
