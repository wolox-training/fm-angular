import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  registerForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      email: new FormControl(null),
      first_name: new FormControl(null),
      last_name: new FormControl(null),
      password: new FormControl(null),
    });
  }

  submitForm() {
    const user = {
      user: {
      ...this.registerForm.value,
     password_confirmation: this.registerForm.value.password,
     locale: 'en',
    }
    };
    console.log(JSON.stringify(user));
  }

}
