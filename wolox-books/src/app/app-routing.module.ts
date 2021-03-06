import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './screens/auth/auth.component';
import { RegisterComponent } from './screens/unauth/screens/register/register.component';
import { LoginComponent } from './screens/unauth/screens/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { UnauthGuard } from './guards/unauth.guard';
import { BookListComponent } from './screens/auth/screens/book-list/book-list.component';
import { BookDetailComponent } from './screens/auth/screens/book-detail/book-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [UnauthGuard]},
  { path: 'sign-up', component: RegisterComponent, pathMatch: 'full', canActivate: [UnauthGuard]},
  { path: 'books', component: AuthComponent, canActivate: [AuthGuard], children: [
    { path: '', redirectTo: 'book-list', pathMatch: 'full' },
    { path: 'book-list', component: BookListComponent, pathMatch: 'full' },
    { path: ':id', component: BookDetailComponent}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
