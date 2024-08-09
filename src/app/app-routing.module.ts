import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Pages/Auth/login/login-page.component';
import { RegisterComponent } from './Pages/Auth/register/register.component';
import { ProductsComponent } from './Pages/products/products.component';
import { CartComponent } from './Pages/cart/cart.component';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';

const AppName = " |  Jhola"

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
  {
    path: 'home',
    component: HomePageComponent,
    title: `Home${AppName}`
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: `Products${AppName}`
  },
  {
    path: 'cart',
    component: CartComponent,
    title: `Cart${AppName}`
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    title: `About Us${AppName}`
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: 'full'
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
