import { ApplicationConfig, NgModule } from '@angular/core';
import {
  provideRouter,
  RouterModule,
  Routes,
  withComponentInputBinding,
} from '@angular/router';
import { LoginPageComponent } from './Pages/Auth/login/login-page.component';
import { RegisterComponent } from './Pages/Auth/register/register.component';
import { ProductsComponent } from './Pages/products/products.component';
import { CartComponent } from './Pages/cart/cart.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AuthenticationGaurds } from './Services/Auth/auth-gaurds.guard';
import { provideHttpClient } from '@angular/common/http';
import { ImageCropperUiComponent } from './Features/image-cropper-ui/image-cropper-ui.component';
import { AccountComponent } from './Pages/account/account.component';

const AppName = ' |  DropZone';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [AuthenticationGaurds],
    title: `Login${AppName}`,
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [AuthenticationGaurds],
    title: `Register${AppName}`,
  },
  {
    path: 'account',
    component: AccountComponent,
    title: `Account Section${AppName}`,
  },
  {
    path: 'home',
    component: HomePageComponent,
    title: `Home${AppName}`,
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: `Products${AppName}`,
    canActivate: [AuthenticationGaurds],
  },
  {
    path: 'cart',
    component: CartComponent,
    canActivate: [AuthenticationGaurds],
    title: `Cart${AppName}`,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    title: `About Us${AppName}`,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
