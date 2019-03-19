import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly BASE_URL = 'https://wbooks-api-stage.herokuapp.com/api/v1';

  constructor(private http: HttpClient) { }

  createUser(user) {
    return this.http.post(this.BASE_URL + '/users', user);
  }
}
