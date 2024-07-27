import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Pages/Auth/login/login-page.component';
import { RegisterComponent } from './Pages/Auth/register/register.component';

const AppName = " | Jholi"

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    title: `Login${AppName}`
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: `Register${AppName}`
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
