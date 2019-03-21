import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent{

  constructor(private storage: LocalStorageService, private router: Router) { }

  logout() {
    this.storage.clearStorage();
    this.router.navigateByUrl('/login');
  }

}
