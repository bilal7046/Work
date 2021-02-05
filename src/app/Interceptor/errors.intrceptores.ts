import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(err => {

                if (err) {

                    if (err.status === 500) {
                        this.router.navigateByUrl('/server-error');
                    }

                    if (err.status === 404) {
                        this.router.navigateByUrl('/not-found');
                    }

                    if (err.status === 401) {
                        this.router.navigateByUrl('/not-found');
                    }
                }
                return throwError(err);

            })
        );
    }

}
