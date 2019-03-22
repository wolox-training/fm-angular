import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthCardComponent } from './components/auth-card/auth-card.component';
import { AuthComponent } from './screens/auth/auth.component';
import { RegisterComponent } from './screens/unauth/screens/register/register.component';
import { RegisterFormComponent } from './screens/unauth/screens/register/components/register-form/register-form.component';
import { LoginComponent } from './screens/unauth/screens/login/login.component';
import { LoginFormComponent } from './screens/unauth/screens/login/components/login-form/login-form.component';
import { BookListComponent } from './screens/auth/screens/book-list/book-list.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { BookCardComponent } from './screens/auth/screens/book-list/components/book-card/book-card.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    RegisterFormComponent,
    LoginComponent,
    AuthCardComponent,
    LoginFormComponent,
    AuthComponent,
    BookListComponent,
    BookCardComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
