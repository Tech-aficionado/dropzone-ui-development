import { Component, Inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
} from '@angular/router';

import { QueryClient } from '@tanstack/angular-query-experimental';
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister';
import { MessageService } from 'primeng/api';
import { AuthService } from './Services/Auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loading = false;

  constructor(
    private router: Router,
    private messageService: MessageService,
    private auth: AuthService,
    private authService: AuthService,
  ) {
    this.router.events.subscribe((event: any) => {
      this.checkRouterEvent(event);
    });
  }

  private checkRouterEvent(event: RouterEvent): void {
    if (event instanceof NavigationStart) {
      this.loading = true;
    } else if (
      event instanceof NavigationEnd ||
      event instanceof NavigationCancel ||
      event instanceof NavigationError
    ) {
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }
  }
  queryClient = new QueryClient(/* ... */);
  items!: any[];
  ngOnInit(): void {
    this.items = [
      {
        icon: 'pi pi-pencil',
        command: () => {
          this.messageService.add({
            severity: 'info',
            summary: 'Add',
            detail: 'Data Added',
            sticky: true,
          });
        },
      },
      {
        icon: this.auth.isAuthenticated() ? 'pi pi-sign-out' : 'pi pi-sign-in',
        command: () => {
          this.authService.logout();
          this.router.navigate(['auth/login']);
        },
      },
      {
        icon: 'ph ph-house-line',
        command: () => {
          this.router.navigate(['home']);
        },
      },
      {
        icon: 'ph ph-wrench',
        command: () => {
          this.router.navigate(['services']);
        },
      },
      {
        icon: 'ph ph-user-gear',
        command: () => {
          this.router.navigate(['auth/account']);
        },
      },
    ];
  }
  persister = createSyncStoragePersister({ storage: window.localStorage });
}
