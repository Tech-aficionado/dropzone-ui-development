import { Component, Inject } from '@angular/core';
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

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loading = false;

  constructor(private router: Router) {
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
  persister = createSyncStoragePersister({ storage: window.localStorage });
}
