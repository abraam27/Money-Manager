import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { UsersService } from '../../users/providers/users.service';

@Injectable()
export class AuthService {

    constructor(
        @Inject(forwardRef(() => UsersService))
        private readonly usersService: UsersService
    ) {}
    
    login(username: string, password: string) {
        const user = this.usersService.findByUsername(username);
        return user;
    }

    isAuth(userId: number) {
        const user = this.usersService.findOne(userId);
        return user ? true : false;
    }
}
