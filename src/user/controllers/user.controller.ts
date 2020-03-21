import { Controller, Post, Body, UseInterceptors, Get, UseGuards } from "@nestjs/common";
import { UserService } from "../services/user.service";
import { ApiCreatedResponse } from "@nestjs/swagger";
import { UserRegisterResponseDto, UserRegisterRequestDto } from "../dto";
import { UserInterceptor } from "../interceptors/user.interceptor";
import { User } from "../decorators/user.decorator";
import { AuthGuard } from "../guards/auth.guard";
import { Roles } from "../decorators/roles.decorator";
import { UserRole } from "../models";

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
  @Roles(UserRole.ADMIN)
  getUser(@User() user) {
    return {user};
  }
}
