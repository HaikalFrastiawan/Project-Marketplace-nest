import { CallHandler, ExecutionContext, NestInterceptor } from "@nestjs/common";
import { Observable } from "rxjs";
import { map } from "rxjs";

export class SerializeInterceptor implements NestInterceptor {
    intercept(
        context: ExecutionContext, 
        next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        console.log('running before handler');
        return next.handle().pipe(
            map((data: any) => {
                console.log('Running after handler')
            }),
        )
    }
}