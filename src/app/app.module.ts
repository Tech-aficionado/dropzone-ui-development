import { NgDompurifySanitizer } from '@tinkoff/ng-dompurify';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectButtonModule } from 'primeng/selectbutton';
import { VoiceCommandComponent } from './components/voice-command/voice-command.component';
import { CameraCaptureComponent } from './components/camera-capture/camera-capture.component';
import { LoginPageComponent } from './Pages/Auth/login/login-page.component';
import { RegisterComponent } from './Pages/Auth/register/register.component';
import { CustomTopBarComponent } from './components/custom-top-bar/custom-top-bar.component';
import { ButtonModule } from 'primeng/button';
import { ChipsModule } from 'primeng/chips';
import { NgInputBoxComponent } from './components/ng-input-box/ng-input-box.component';
import { NgButtonComponent } from './components/ng-button/ng-button.component';
import { NgSubmitButtonComponent } from './components/ng-submit-button/ng-submit-button.component';
import { ReactiveFormsModule } from '@angular/forms';
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
import {ImageCropperComponent} from 'ngx-image-cropper';
import { AccountComponent } from './Pages/account/account.component'

@NgModule({
  declarations: [
    AppComponent,
    VoiceCommandComponent,
    CameraCaptureComponent,
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
    Button1Component,
    AccountComponent,
  ],
  imports: [
    BrowserModule,
    TagModule,
    AppRoutingModule,
    SelectButtonModule,
    ToastModule,
    CarouselModule,
    ButtonModule,
    ChipsModule,
    FileUploadModule,
    ImageCropperComponent,
    ReactiveFormsModule,
    DialogModule,
    HttpClientModule,
    TabMenuModule,
    BrowserAnimationsModule,
    ImageCropperUiComponent,
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    MessageService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
