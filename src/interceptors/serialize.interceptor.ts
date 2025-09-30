import { CallHandler, ExecutionContext, NestInterceptor, UseInterceptors } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { Observable } from "rxjs";
import { map } from "rxjs";


interface clasSConstructor{
    new(...args: any[]): object;
}

export function Serialize(dto: clasSConstructor){
    return UseInterceptors(new SerializeInterceptor(dto));
}


export class SerializeInterceptor implements NestInterceptor {
    constructor(private dto: any){}

    intercept(
        context: ExecutionContext, 
        next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        console.log('running before handler');
        return next.handle().pipe(
            map((data: any) => {
                return plainToClass(this.dto, data, {
                    excludeExtraneousValues: true,
                })
            }), 
        )
    }
}