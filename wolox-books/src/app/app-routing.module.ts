import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './screens/auth/auth.component';
import { RegisterComponent } from './screens/unauth/screens/register/register.component';
import { LoginComponent } from './screens/unauth/screens/login/login.component';
import { UnauthComponent } from './screens/unauth/unauth.component';
import { BookListComponent } from './screens/auth/screens/book-list/book-list.component';
import { AuthGuard } from './guards/auth.guard';
import { UnauthGuard } from './guards/unauth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'books/book-list', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [UnauthGuard]},
  { path: 'sign-up', component: RegisterComponent, pathMatch: 'full', canActivate: [UnauthGuard]},
  { path: 'books', component: AuthComponent, canActivate: [AuthGuard], children: [
    { path: 'book-list', component: BookListComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
