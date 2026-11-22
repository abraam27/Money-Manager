import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';

@Injectable()
export class UsersService {
    findAll() {
        return [
            {
                id: 1,
                name: 'John Doe',
                email: 'john.doe@example.com',
                password: 'password',
            },
            {
                id: 2,
                name: 'Jane Doe',
                email: 'jane.doe@example.com',
                password: 'password',
            },
            {
                id: 3,
                name: 'Jim Doe',
                email: 'jim.doe@example.com',
                password: 'password',
            },
        ];
    }

    findOne(id: number) {
        return this.findAll().find((user) => user.id === id);
    }

    create(createUserDto: CreateUserDto) {
        return {
            id: this.findAll().length + 1,
            ...createUserDto,
        };
    }

    update(id: number, updateUserDto: UpdateUserDto) {
        return {
            id,
            ...updateUserDto,
        };
    }
}