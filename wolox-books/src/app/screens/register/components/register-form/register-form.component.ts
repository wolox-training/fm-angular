import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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
      email: new FormControl(null, [Validators.required, Validators.email]),
      first_name: new FormControl(null, Validators.required),
      last_name: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
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
    console.log(user);
  }

}
