import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthCardComponent } from './components/auth-card/auth-card.component';
import { AuthComponent } from './screens/auth/auth.component';
import { UnauthComponent } from './screens/unauth/unauth.component';
import { RegisterComponent } from './screens/unauth/screens/register/register.component';
import { RegisterFormComponent } from './screens/unauth/screens/register/components/register-form/register-form.component';
import { LoginComponent } from './screens/unauth/screens/login/login.component';
import { LoginFormComponent } from './screens/unauth/screens/login/components/login-form/login-form.component';
import { BookListComponent } from './screens/auth/components/book-list/book-list.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    RegisterFormComponent,
    LoginComponent,
    AuthCardComponent,
    LoginFormComponent,
    AuthComponent,
    UnauthComponent,
    BookListComponent,
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
