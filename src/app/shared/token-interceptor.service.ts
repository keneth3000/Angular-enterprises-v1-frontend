import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpInterceptor, HTTP_INTERCEPTORS, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor(private authService:AuthService, private router:Router) { }

  intercept(req:HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
    const token:string = this.authService.getToken();

    let authReq = req;
    if(token){
      authReq = req.clone({
        setHeaders:{
          Authorization: `Bearer ${token}`
        }
      });
    }
    return next.handle(authReq)
      .pipe(catchError((err:HttpErrorResponse)=>{
        if(err.status === 401){
          this.router.navigateByUrl('/login')
        }
        return throwError(err);
      }))
  }
}

export const authInterceptorProviders = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi:true
  }
];