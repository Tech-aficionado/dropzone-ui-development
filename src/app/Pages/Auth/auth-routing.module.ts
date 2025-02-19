import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { LoginPageComponent } from './login/login-page.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticationGaurds } from 'src/app/Services/Auth/auth.guard';
import { AccountComponent } from '../account/account.component';
import { OnboardingComponent } from './onboarding/onboarding.component';

const appName = ' | DropZone';

const routes: Route[] = [
  {
    path: '',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
      },
      {
        path: 'login',
        component: LoginPageComponent,
        title: `Login${appName}`,
      },
      {
        path: 'register',
        component: RegisterComponent,
        title: `Register${appName}`,
      },
      {
        path: 'account',
        component: AccountComponent,
        canActivate: [AuthenticationGaurds],
        title: `Account Section${appName}`,
      },
      {
        path: 'onboarding',
        component: OnboardingComponent,
        title: `Welcome${appName}`,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
