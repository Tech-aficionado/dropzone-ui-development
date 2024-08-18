import { Component, Inject } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
  RouterEvent,
} from '@angular/router';

import {
  TuiRootModule,
  TuiDialogModule,
  TuiAlertModule,
  TUI_SANITIZER,
  TuiThemeNightModule,
  TuiModeModule,
} from '@taiga-ui/core';
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
      }, 2000);
    }
  }
}
