import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class SpeechRecognitionServicesService {
  recognition: any;
  isListening: boolean = false;

  constructor(
    private zone: NgZone,
    private router: Router,
  ) {
    const { webkitSpeechRecognition }: IWindow = <IWindow>(<unknown>window);
    this.recognition = new webkitSpeechRecognition();
    this.recognition.continuous = true;
    this.recognition.interimResults = false;
    this.recognition.lang = 'en-IN';

    this.recognition.onresult = (event: any) => {
      this.zone.run(() => {
        const transcript =
          event.results[event.resultIndex][0].transcript.trim();
        if (transcript.includes('Google')) {
          window.location.href = 'https://www.google.com';
        } else if (transcript.includes('YouTube')) {
          window.location.href = 'https://www.youtube.com';
        } else if (transcript.includes('navigate home')) {
          this.router.navigate(['/home']); // Assuming '/home' is a valid route in your app
        } else {
          window.location.href = `https://www.bing.com/search?pglt=171&q=${transcript}&cvid=b08442b973c3470db2774120c549f5f1&gs_lcrp=EgZjaHJvbWUqBggAEAAYQDIGCAAQABhAMgYIARAAGEAyBggCEAAYQDIGCAMQABhAMgYIBBAAGEAyBggFEAAYQDIGCAYQABhAMgYIBxAAGEAyBggIEAAYQNIBCDE1ODFqMGoxqAIAsAIA&FORM=ANNTA1&ucpdpc=UCPD&PC=U531`;
        }
        console.log('Transcript:', transcript);
      });
    };

    this.recognition.onerror = (event: any) => {
      console.error('Speech recognition error', event.error);
    };

    this.recognition.onend = () => {
      this.zone.run(() => {
        this.isListening = false;
      });
    };
  }

  start() {
    if (this.isListening) return;
    this.isListening = true;
    this.recognition.start();
  }

  stop() {
    if (!this.isListening) return;
    this.recognition.stop();
  }
}

interface IWindow extends Window {
  webkitSpeechRecognition: any;
}
