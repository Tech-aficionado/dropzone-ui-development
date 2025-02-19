import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { DividerModule } from 'primeng/divider';
import { NgInputBoxComponent } from 'src/app/components/ng-input-box/ng-input-box.component';
import { ToastModule } from 'primeng/toast';
import { GetFormControlPipe } from 'src/app/pipes/get-form-control.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { RegisterComponent } from './register/register.component';
import { LoginPageComponent } from './login/login-page.component';
import { EmailAuthButtonComponent } from 'src/app/Elements/email-auth-button/email-auth-button.component';
import { GithubAuthButtonComponent } from 'src/app/Elements/github-auth-button/github-auth-button.component';
import { GoogleAuthButtonComponent } from 'src/app/Elements/google-auth-button/google-auth-button.component';
import { VerifyauthComponent } from './verifyauth/verifyauth.component';
import { InputOtpModule } from 'primeng/inputotp';
import { TooltipModule } from 'primeng/tooltip';
import { ProgressBarModule } from 'primeng/progressbar';
import { ButtonModule } from 'primeng/button';
import { AuthTempPageComponent } from './auth-temp-page/auth-temp-page.component';
import { NotUserSvgComponent } from 'src/app/Icons/not-user-svg/not-user-svg.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// For dynamic progressbar demo
import { InputTextModule } from 'primeng/inputtext';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { ImageModule } from 'primeng/image';
import { PromptImageGeneratorComponent } from 'src/app/components/prompt-image-generator/prompt-image-generator.component';
import { PromptImageLoadingComponent } from 'src/app/Elements/prompt-image-loading/prompt-image-loading.component';
import { ProfileCardComponent } from '../../components/profile-card/profile-card.component';
@NgModule({
  declarations: [
    LoginPageComponent,
    EmailAuthButtonComponent,
    AuthTempPageComponent,
    VerifyauthComponent,
    RegisterComponent,
    OnboardingComponent,
    NotUserSvgComponent,
    GoogleAuthButtonComponent,
    GithubAuthButtonComponent,
    NgInputBoxComponent,
    GetFormControlPipe,
        
        PromptImageGeneratorComponent,
        PromptImageLoadingComponent,
        ProfileCardComponent,
  ],
  imports: [
    InputTextModule,
    FormsModule,
    CommonModule,ImageModule,
    AvatarGroupModule,
    ButtonModule,
    ProgressBarModule,
    TooltipModule,
    AvatarModule,
    DividerModule,
    ToastModule,
    PasswordModule,
    IconFieldModule,
InputIconModule,
    ReactiveFormsModule,
    InputOtpModule,
  ],
  exports: [
    InputTextModule,
    LoginPageComponent,
        
        PromptImageGeneratorComponent,
        PromptImageLoadingComponent,
    RegisterComponent,
    FormsModule,
    IconFieldModule,
InputIconModule,
    CommonModule,
    EmailAuthButtonComponent,
    NotUserSvgComponent,
    InputOtpModule,
    AuthTempPageComponent,
    TooltipModule,ImageModule,
    ProgressBarModule,
    ButtonModule,
    VerifyauthComponent,
    GoogleAuthButtonComponent,
    GithubAuthButtonComponent,
    AuthRoutingModule,
    DividerModule,
    ToastModule,
    NgInputBoxComponent,
    GetFormControlPipe,
    PasswordModule,
    ReactiveFormsModule,
  ],
})
export class AuthModule {}
