import { Injectable } from '@nestjs/common';

@Injectable()
export class AccountsService {
    constructor() {}

    findAll() {
        return 'accounts';
    }

    findOne(id: number) {
        return `account ${id}`;
    }

    // create(createAccountDto: CreateAccountDto) {
    //     return createAccountDto;
    // }

    // update(id: number, updateAccountDto: UpdateAccountDto) {
    //     return updateAccountDto;
    // }
}