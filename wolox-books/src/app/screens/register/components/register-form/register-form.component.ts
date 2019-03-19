import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent {

  registerForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    firstName: new FormControl(null, Validators.required),
    lastName: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  constructor(private userService: UserService) { }

  submitForm() {
    const user = {
      user: {
      ...this.registerForm.value,
     passwordConfirmation: this.registerForm.value.password,
     locale: 'en',
    }
    };
    console.log(JSON.stringify(user));
    this.userService.createUser(user).subscribe(
      response => console.log('Success!'),
      error => console.log(error)
    );
  }

}
