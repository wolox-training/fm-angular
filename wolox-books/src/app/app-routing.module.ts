import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './components/auth/auth.component';
import { RegisterComponent } from './screens/unauth/screens/register/register.component';
import { LoginComponent } from './screens/unauth/screens/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'sign-up', component: RegisterComponent, pathMatch: 'full' },
  { path: 'auth', component: AuthComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
