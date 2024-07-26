import { Component } from '@angular/core';
import { SpeechRecognitionServicesService } from '../../Services/SpeechRecognition/speech-recognition-services.service';

@Component({
  selector: 'app-voice-command',
  templateUrl: './voice-command.component.html',
  styleUrls: ['./voice-command.component.css'],
})
export class VoiceCommandComponent {
  constructor(
    public speechRecognitionService: SpeechRecognitionServicesService,
  ) {}

  startListening() {
    this.speechRecognitionService.start();
  }

  stopListening() {
    this.speechRecognitionService.stop();
  }
}
