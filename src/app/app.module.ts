import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
  ],
  imports: [BrowserModule, AppRoutingModule, ButtonModule, ChipsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
