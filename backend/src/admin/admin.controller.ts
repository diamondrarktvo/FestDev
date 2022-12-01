import { Controller, ForbiddenException, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AdminService } from './admin.service';

@Controller('admin')
export class AdminController {
    constructor(
        private readonly adminService: AdminService
    ) {}

    @UseGuards(AuthGuard('jwtFakoy'))
    @Get('')
    async findAdmin(@Request() req: any) {
        if(req.user.fonction !== 'admin') throw new ForbiddenException('Credentials incorrects !');
        return await this.adminService.find(+(req.user.id));
    }
}
