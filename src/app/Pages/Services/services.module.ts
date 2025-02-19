// auth.module.ts
import { NgModule } from '@angular/core';
import { MainServicePageComponent } from './main-service-page/main-service-page.component';
import { AppComponent } from 'src/app/app.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { CheckboxModule } from 'primeng/checkbox';
import { ChipModule } from 'primeng/chip';
import { ChipsModule } from 'primeng/chips';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { DialogModule } from 'primeng/dialog';
import { DividerModule } from 'primeng/divider';
import { DragDropModule } from 'primeng/dragdrop';
import { FileUploadModule } from 'primeng/fileupload';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputOtpModule } from 'primeng/inputotp';
import { MenubarModule } from 'primeng/menubar';
import { MessagesModule } from 'primeng/messages';
import { PasswordModule } from 'primeng/password';
import { RatingModule } from 'primeng/rating';
import { ScrollerModule } from 'primeng/scroller';
import { SelectButtonModule } from 'primeng/selectbutton';
import { SkeletonModule } from 'primeng/skeleton';
import { SpeedDialModule } from 'primeng/speeddial';
import { StepperModule } from 'primeng/stepper';
import { TabMenuModule } from 'primeng/tabmenu';
import { TagModule } from 'primeng/tag';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';
import { TooltipModule } from 'primeng/tooltip';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { ImageCropperUiComponent } from 'src/app/Features/image-cropper-ui/image-cropper-ui.component';
import { ServiceRouteModule } from './services.routing.module';
import { ProductSearchPageComponent } from './product-search-page/product-search-page.component';
import { HomeTopNavComponent } from 'src/app/components/home-top-nav/home-top-nav.component';
import { SharedModule } from '../../Shared.module';
@NgModule({
  declarations: [MainServicePageComponent, ProductSearchPageComponent],
  imports: [
    ServiceRouteModule,
    CommonModule,
    MenubarModule,
    FloatLabelModule,
    SharedModule,
    MessagesModule,
    DragDropModule,
    ToolbarModule,
    TagModule,
    DataViewModule,
    TooltipModule,
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
    ToastModule,
    ImageCropperUiComponent,
  ],
})
export class ServiceModule {}
