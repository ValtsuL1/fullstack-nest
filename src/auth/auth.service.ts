import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { comparePasswords } from 'src/utils/bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async signIn(email: string, pass: string): Promise<{ access_token: string }> {
        const user = await this.userService.findByEmail(email)
        if (!comparePasswords(pass, user?.password)) {
            throw new UnauthorizedException()
        }
        const payload = { role: user.role, id: user.id, email: user.email, state: user.state }
        return {
            access_token: await this.jwtService.signAsync(payload),
        }
    }
}

