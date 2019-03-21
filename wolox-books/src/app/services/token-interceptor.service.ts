import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private storage: LocalStorageService) { }

  intercept(req, next) {
    const request = req.clone({
      setHeaders: {
        Authorization: 'Bearer ' + this.storage.getValue('token')
      }
    });
    return next.handle(request);
  }
}
