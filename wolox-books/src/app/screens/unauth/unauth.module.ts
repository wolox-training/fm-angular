import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './screens/login/login.component';
import { RegisterComponent } from './screens/register/register.component';
import { AuthCardComponent } from 'src/app/components/auth-card/auth-card.component';
import { LoginFormComponent } from './screens/login/components/login-form/login-form.component';
import { RegisterFormComponent } from './screens/register/components/register-form/register-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    AuthCardComponent,
    LoginFormComponent,
    RegisterFormComponent
  ],
  imports: [
    RouterModule,
    ReactiveFormsModule,
    CommonModule
  ]
})
export class UnauthModule { }
