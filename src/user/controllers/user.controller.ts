import { Controller, Post, Body, UseInterceptors, Get, UseGuards } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { ApiCreatedResponse } from "@nestjs/swagger";
import { UserRegisterResponseDto, UserRegisterRequestDto } from "../dto";
import { UserInterceptor } from "../interceptors/user.interceptor";
import { User } from "../decorators/user.decorator";
import { AuthGuard } from "../guards/auth.guard";

@Controller('user')
// @UseInterceptors(UserInterceptor)
export class UserController {

  constructor(private userService: UserService) {}

  @Post('register')
  @ApiCreatedResponse({type: UserRegisterResponseDto})
  async register(@Body() data: UserRegisterRequestDto): Promise<UserRegisterResponseDto> {
    const user = await this.userService.create(data);
    // TODO handle errors
    return {
      user,
    };
  }

  @Get()
  @UseGuards(AuthGuard)
  getUser(@User() user) {
    return {user};
  }
}
