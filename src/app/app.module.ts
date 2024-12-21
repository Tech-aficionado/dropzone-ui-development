import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { InputOtpModule } from 'primeng/inputotp';
import { AppRoutingModule } from './app-routing.module';
import { CheckboxModule } from 'primeng/checkbox';
import { RatingModule } from 'primeng/rating';
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
import { AppCustomFooterComponent } from './components/app-custom-footer/app-custom-footer.component';
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
import { ContextMenuModule } from 'primeng/contextmenu';
import { ProductDualViewComponent } from './components/product-dual-view/product-dual-view.component';
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
    AppCustomFooterComponent,
    Button1Component,
    AccountComponent,
    ProductCategoryPanelComponent,
    ProductTileViewSkeletonComponent,
    ProductTileViewComponent,
    AuthButtonComponent,
    ProductDualViewComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    DragDropModule,
    ToolbarModule,
    TagModule,DataViewModule,
    TooltipModule,
    AppRoutingModule,
    NgOptimizedImage,
    SelectButtonModule,
    ToastModule,BadgeModule,
    ScrollerModule,
    CarouselModule,
    SkeletonModule,ContextMenuModule,
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
    ImageCropperUiComponent,
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
    MessageService,
    provideTanStackQuery(new QueryClient()),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
