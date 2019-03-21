import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, Validators.required),
  });

  constructor(private userService: UserService, private storage: LocalStorageService, private router: Router) { }

  ngOnInit() {
      console.log(this.userService.isUserLogged());
  }

  submitForm() {
    this.userService.loginUser(this.loginForm.value).subscribe(
      response => {
        this.storage.setValue('token', response['access_token']);
        this.router.navigateByUrl('/books/book-list');
      },
      error => console.log(error)
    );
  }

}
