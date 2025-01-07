import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputOtpModule } from 'primeng/inputotp';
import { AppRoutingModule } from './app-routing.module';
import { CheckboxModule } from 'primeng/checkbox';
import { RatingModule } from 'primeng/rating';
import { AppComponent } from './app.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { LoginPageComponent } from './Pages/Auth/login/login-page.component';
import { RegisterComponent } from './Pages/Auth/register/register.component';
import { CustomTopBarComponent } from './components/custom-top-bar/custom-top-bar.component';
import { ButtonModule } from 'primeng/button';

import { ChipsModule } from 'primeng/chips';
import { NgInputBoxComponent } from './components/ng-input-box/ng-input-box.component';
import { NgButtonComponent } from './components/ng-button/ng-button.component';
import { NgSubmitButtonComponent } from './components/ng-submit-button/ng-submit-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetFormControlPipe } from './pipes/get-form-control.pipe';
import { DialogModule } from 'primeng/dialog';
import { HttpClientModule } from '@angular/common/http';
import { TabMenuModule } from 'primeng/tabmenu';
import { ProductsComponent } from './Pages/products/products.component';
import { CartComponent } from './Pages/cart/cart.component';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { AboutUsComponent } from './Pages/about-us/about-us.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { AdminComponent } from './Pages/admin/admin.component';
import { ToastModule } from 'primeng/toast';
import { CustomerComponent } from './Pages/customer/customer.component';
import { LoaderComponent } from './Elements/loader/loader.component';
import { JWT_OPTIONS, JwtHelperService } from '@auth0/angular-jwt';
import { MessageService } from 'primeng/api';
import { provideRouter, RouterModule } from '@angular/router';
import { Button1Component } from './Elements/button-1/button-1.component';
import { ImageCropperUiComponent } from './Features/image-cropper-ui/image-cropper-ui.component';
import { FileUploadModule } from 'primeng/fileupload';
export function tokenGetter() {
  return localStorage.getItem('access_token');
}
import { DataViewModule } from 'primeng/dataview';
import { SkeletonModule } from 'primeng/skeleton';
import { ChipModule } from 'primeng/chip';
import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
import { AccountComponent } from './Pages/account/account.component';
import { ProductTileViewComponent } from './components/product-tile-view/product-tile-view.component';
import { ScrollerModule } from 'primeng/scroller';
import { ProductCategoryPanelComponent } from './components/product-category-panel/product-category-panel.component';
import { ProductTileViewSkeletonComponent } from './components/product-tile-view-skeleton/product-tile-view-skeleton.component';
import { AuthButtonComponent } from './Elements/auth-button/auth-button.component';
import { TooltipModule } from 'primeng/tooltip';
import { NgOptimizedImage } from '@angular/common';
import { DragDropModule } from 'primeng/dragdrop';
import { BadgeModule } from 'primeng/badge';
import {
  provideTanStackQuery,
  QueryClient,
} from '@tanstack/angular-query-experimental';
import { CardModule } from 'primeng/card';
import { StepperModule } from 'primeng/stepper';
import { SpeedDialModule } from 'primeng/speeddial';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ProductDualViewComponent } from './components/product-dual-view/product-dual-view.component';
import { CustomFooterComponent } from './components/custom-footer/custom-footer.component';
import { WatchFaceUiComponent } from './Elements/watch-face-ui/watch-face-ui.component';
import { GridLoadingComponent } from './Elements/grid-loading/grid-loading.component';
import { PromptImageLoadingComponent } from './Elements/prompt-image-loading/prompt-image-loading.component';
import { PromptImageGeneratorComponent } from './components/prompt-image-generator/prompt-image-generator.component';
import { DividerModule } from 'primeng/divider';
import { AuthCardButtonComponent } from './Elements/auth-card-button/auth-card-button.component';
import { GoogleAuthButtonComponent } from './Elements/google-auth-button/google-auth-button.component';
import { FacebookAuthButtonComponent } from './Elements/facebook-auth-button/facebook-auth-button.component';
import { NotUserSvgComponent } from './Icons/not-user-svg/not-user-svg.component';
import { CrossSvgComponent } from './Icons/cross-svg/cross-svg.component';
import { PasswordModule } from 'primeng/password';
import { FloatLabelModule } from 'primeng/floatlabel';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider, } from "@abacritt/angularx-social-login";
import { OAuthService, provideOAuthClient } from 'angular-oauth2-oidc';
import { AuthTempPageComponent } from './Pages/Auth/auth-temp-page/auth-temp-page.component';
import { PrivacyComponent } from './Pages/Extras/privacy/privacy.component';
import { DeleteAllComponent } from './Pages/Extras/delete-all/delete-all.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { MessagesModule } from 'primeng/messages';


const firebaseConfig = {
  apiKey: "AIzaSyCaIXFDRaspdyI7fy1dtU2fESwjTIAjQCo",
  authDomain: "dropzone-20a6d.firebaseapp.com",
  projectId: "dropzone-20a6d",
  storageBucket: "dropzone-20a6d.firebasestorage.app",
  messagingSenderId: "801561768381",
  appId: "1:801561768381:web:e22815cb0adfc3247a22d4",
  measurementId: "G-ZMT69PGC4G"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegisterComponent,
    CustomTopBarComponent,
    NgInputBoxComponent,
    NgButtonComponent,
    NgSubmitButtonComponent,
    GetFormControlPipe,
    ProductsComponent,
    CartComponent,
    AboutUsComponent,
    HomePageComponent,
    AdminComponent,
    CustomerComponent,
    LoaderComponent,
    CustomFooterComponent,
    Button1Component,
    AccountComponent,
    ProductCategoryPanelComponent,
    ProductTileViewSkeletonComponent,
    ProductTileViewComponent,
    AuthButtonComponent,
    ProductDualViewComponent,
    WatchFaceUiComponent,
    PromptImageLoadingComponent,
    GridLoadingComponent,
    PromptImageGeneratorComponent,
    AuthCardButtonComponent,
    GoogleAuthButtonComponent,
    FacebookAuthButtonComponent,
    NotUserSvgComponent,
    CrossSvgComponent,
    AuthTempPageComponent,
    PrivacyComponent,
    DeleteAllComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    BrowserModule,
    MenubarModule,
    FloatLabelModule,
    MessagesModule,
    DragDropModule,
    ToolbarModule,
    TagModule,
    DataViewModule,
    TooltipModule,
    AppRoutingModule,
    SpeedDialModule,
    CardModule,
    DividerModule,
    NgOptimizedImage,
    SelectButtonModule,
    PasswordModule,
    ToastModule,
    BadgeModule,
    StepperModule,
    ScrollerModule,
    CarouselModule,
    SkeletonModule,
    ContextMenuModule,
    ChipModule,
    ButtonModule,
    InputOtpModule,
    RatingModule,
    ChipsModule,
    FileUploadModule,
    CheckboxModule,
    ReactiveFormsModule,
    DialogModule,
    FormsModule,
    HttpClientModule,
    TabMenuModule,
    BrowserAnimationsModule,
    ToastModule,
    ImageCropperUiComponent,
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    MessageService,
    provideTanStackQuery(
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retryOnMount: false,
            retry: true,
          },
        },
      }),
    ),
    
    provideOAuthClient(),
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
