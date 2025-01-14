import {
  Component,
  effect,
  Injector,
  runInInjectionContext,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { injectQuery } from '@tanstack/angular-query-experimental';
import { MessageService } from 'primeng/api';
import { AuthService } from 'src/app/Services/Auth/auth.service';
import { GetPromptIamgeService } from 'src/app/Services/TanstackQueries/get-auth-prompt-image.service';
import { TextFilterService } from 'src/app/Services/text-filter/text-filter.service';

@Component({
  selector: 'app-prompt-image-generator',
  templateUrl: './prompt-image-generator.component.html',
  styleUrl: './prompt-image-generator.component.css',
})
export class PromptImageGeneratorComponent {
  imageUrl: any = this.sanitizer.bypassSecurityTrustUrl(
    'data:image/png;base64,' + localStorage.getItem('imageUrl'),
  );
  generating__image = false;

  info = '~ Estimated Time: 20s ~ Abusive/Bad Words are not allowed';
  prompt!: string;
  prevPrompt!: string;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private sanitizer: DomSanitizer,
    private router: Router,
    private messageService: MessageService,
    private filterText: TextFilterService,
    public getProduct: GetPromptIamgeService,
    private injector: Injector,
  ) {}

  onimgProcess(event: any) {
    if (this.prevPrompt === this.prompt && this.prompt) return;
    if (this.filterText.checkProfanity(this.prompt)) {
      this.prompt = this.filterText.censorText(this.prompt);
      this.prompt = 'Not Allowed';
      this.messageService.add({
        severity: 'error',
        summary: 'Bad Words Not Allowed',
        detail: 'Please avoid using these words',
      });
      return;
    }
    this.generating__image = true;
    runInInjectionContext(this.injector, () => {
      const query = injectQuery(() => this.getProduct.getImage(this.prompt));
      effect(() => {
        if (query.isPending()) {
          console.log('Query is loading...');
          this.generating__image = true;
        } else if (query.isError()) {
          console.error('Query error:', query.error());
          this.generating__image = false;
        } else if (query.isSuccess()) {
          console.log('Query successful');
          const imageData = query.data();
          if (imageData) {
            localStorage.setItem('imageUrl', imageData);
            this.imageUrl = this.sanitizer.bypassSecurityTrustUrl(
              'data:image/png;base64,' + imageData,
            );
            setTimeout(() => {
              this.generating__image = false;
              this.prevPrompt = this.prompt;
            }, 2000);
          }
        }
      });
    });
  }
  onImageError(event: any) {
    console.error('Error loading image:', event);
  }
}
