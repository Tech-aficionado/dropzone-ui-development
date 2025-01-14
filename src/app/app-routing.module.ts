import { APP_INITIALIZER, ApplicationConfig, NgModule } from '@angular/core';
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
import { AdminComponent } from './Pages/admin/admin.component';
import { DynamicRouteService } from './Services/Routes/dynamic-route.service';
import { PrivacyComponent } from './Pages/Extras/privacy/privacy.component';
import { DeleteAllComponent } from './Pages/Extras/delete-all/delete-all.component';
import { VerifyauthComponent } from './Pages/Auth/verifyauth/verifyauth.component';
import { MainServicePageComponent } from './Pages/Services/main-service-page/main-service-page.component';
import { AuthTempPageComponent } from './Pages/Auth/auth-temp-page/auth-temp-page.component';
import { ProductSearchPageComponent } from './Pages/Services/product-search-page/product-search-page.component';

const AppName = ' |  DropZone';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    // canActivate: [AuthenticationGaurds],
    title: `Login${AppName}`,
  },
  {
    path: 'register',
    component: RegisterComponent,
    // canActivate: [AuthenticationGaurds],
    title: `Register${AppName}`,
  },
  {
    path: 'account',
    component: AccountComponent,
    canActivate: [AuthenticationGaurds],
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
  },
  {
    path: 'services',
    loadChildren: () => import('./Pages/Services/services.module')
      .then(m => m.ServiceModule)
  },
  {
    path: 'cart',
    component: CartComponent,
    title: `Cart${AppName}`,
  },
  {
    path: 'about-us',
    component: AboutUsComponent,
    title: `About Us${AppName}`,
  },
  {
    path: 'privacy',
    component: PrivacyComponent,
    title: `Privacy${AppName}`,
  },
  {
    path: 'delete-all',
    component: DeleteAllComponent,
    title: `Delete all${AppName}`,
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
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (routeConfig: DynamicRouteService) => {
        return () => routeConfig.initializeRoutes();
      },
      deps: [DynamicRouteService],
      multi: true,
    },
  ],
})
export class AppRoutingModule {
  constructor(private dynamicRouteService: DynamicRouteService) {
    this.dynamicRouteService.initializeRoutes();
  }
}
