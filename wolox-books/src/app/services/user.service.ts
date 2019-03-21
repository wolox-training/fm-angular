import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { LocalStorageService } from './local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,private storage: LocalStorageService) { }

  createUser(user) {
    return this.http.post(environment.apiUrl + '/users', user);
  }

  loginUser(user) {
    return this.http.post(environment.apiUrl + '/users/sessions', user);
  }

  isUserLogged() {
    return this.storage.getValue('token') ? true : false;
  }
}
