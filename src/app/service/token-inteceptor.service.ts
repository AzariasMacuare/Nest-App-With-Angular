import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInteceptorService implements HttpInterceptor {

  intercept(req, next) {
    const token = localStorage.getItem('token');
    // const refresh = localStorage.getItem('refr');
    const tokeniceReq = req.clone({
      setHeaders: {Authorization: `Bearer ${token}`},
    })
    return next.handle(tokeniceReq);
  }
}
