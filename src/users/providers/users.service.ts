import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';
import { AuthService } from '../../auth/providers/auth.service';

@Injectable()
export class UsersService {

    constructor(
        @Inject(forwardRef(() => AuthService))
        private readonly authService: AuthService
    ) {}

    findAll() {
        if (this.authService.isAuth(1)) {
            return [
                {
                    id: 1,
                    name: 'John Doe',
                    username: 'john.doe',
                    email: 'john.doe@example.com',
                    password: 'password',
                },
            ];
        }
        return [
            {
                id: 1,
                name: 'John Doe',
                username: 'john.doe',
                email: 'john.doe@example.com',
                password: 'password',
            },
            {
                id: 2,
                name: 'Jane Doe',
                username: 'jane.doe',
                email: 'jane.doe@example.com',
                password: 'password',
            },
            {
                id: 3,
                name: 'Jim Doe',
                username: 'jim.doe',
                email: 'jim.doe@example.com',
                password: 'password',
            },
        ];
    }

    findOne(id: number) {
        return this.findAll().find((user) => user.id === id);
    }

    findByUsername(username: string) {
        return this.findAll().find((user) => user.username === username);
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