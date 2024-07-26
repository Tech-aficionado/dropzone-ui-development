import { TestBed } from '@angular/core/testing';

import { SpeechRecognitionServicesService } from './speech-recognition-services.service';

describe('SpeechRecognitionServicesService', () => {
  let service: SpeechRecognitionServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeechRecognitionServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
