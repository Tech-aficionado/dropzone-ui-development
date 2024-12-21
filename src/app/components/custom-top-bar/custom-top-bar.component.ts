import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';
import { SecureLocalStorageService } from 'src/app/Services/SecureLocalStorage/secure-local-storage.service';

@Component({
  selector: 'app-custom-top-bar',
  templateUrl: './custom-top-bar.component.html',
  styleUrls: ['./custom-top-bar.component.css'],
})
export class CustomTopBarComponent implements OnInit {
  @Input() Heading: string = 'DropZone';
  @Input() Triggering!: boolean;
  @Input() NavigateTo!: string;
  @Input() NavButtonText!: string;
  Authenticated!: boolean;

  constructor(
    private router: Router,
    private localStorage: SecureLocalStorageService,
    private messageService: MessageService,
  ) {}

  navigation() {
    this.router.navigate([`${this.NavigateTo}`]);
  }

  @Input() items!: MenuItem[];

  activeItem: MenuItem | undefined;

  ngOnInit() {
    this.activeItem = this.items[0];
    this.Authenticated =
      typeof this.localStorage.getItem('Access_token') == 'boolean'
        ? false
        : true;
  }

  onActiveItemChange(event: MenuItem) {
    this.activeItem = event;
  }
  // onLogOut() {
  //   localStorage.clear();
  //   this.router.navigate(['/login']);
  //   this.messageService.add({
  //     severity: 'error',
  //     summary: 'Logged Out',
  //     detail: 'Damn!! Have a great day...',
  //   });
  // }
}
