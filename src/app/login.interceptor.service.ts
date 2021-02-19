import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpParams, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthentificationService } from './authentification.service';
@Injectable()
export class LoginInterceptor implements HttpInterceptor {
    constructor(private injector: Injector) {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authService = this.injector.get(AuthentificationService);
        const tokenizedReq = req.clone({
            setHeaders : {
                Authorization: `Bearer ${authService.getToken()}`
            }
        });
        return next.handle(tokenizedReq);

}
}
