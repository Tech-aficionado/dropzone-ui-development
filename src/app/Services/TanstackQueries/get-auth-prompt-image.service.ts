import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BackendIP } from 'Konstants';
import { lastValueFrom, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetPromptIamgeService {
  constructor(private http: HttpClient) {}
  public getImage(prompt: any = 'an old man emoji') {
    let input = {
      prompt: prompt,
    };
    return {
      queryKey: ['products', prompt],
      queryFn: () =>
        lastValueFrom(
          this.http.post<any>(
            `${BackendIP}/jholi-services/users/auth/prompted/profilePic`,
            input,
          ),
        ),
    };
  }
}
