import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { UserRole } from '../models';

@Injectable()
export class UserInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const req = context.switchToHttp().getRequest();
    console.log('interceptor')
    req.tokenPayload = {
      user: {
        id: 1,
        name: 'Piotr',
        roles: [UserRole.ADMIN],
      },
    };
    return next.handle().pipe(

    );
  }
}
