import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './screens/register/register.component';
import { RegisterFormComponent } from './screens/register/components/register-form/register-form.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './screens/login/login.component';
import { AuthCardComponent } from './components/auth-card/auth-card.component';
import { LoginFormComponent } from './screens/login/components/login-form/login-form.component';
import { AuthComponent } from './components/auth/auth.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    RegisterFormComponent,
    LoginComponent,
    AuthCardComponent,
    LoginFormComponent,
    AuthComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
