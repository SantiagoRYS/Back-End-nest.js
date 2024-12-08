import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/logUp.dto';
import { LogInDto } from './dto/logIn.dot';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signup')
  async signUp(@Body() signUpDto: SignUpDto): Promise<{ token: string }> {
    return this.authService.signUp(signUpDto);
  }

  @Post('login')
  async logIn(@Body() logInDto: LogInDto): Promise<{ token: string }> {
    return this.authService.logIn(logInDto);
  }
}