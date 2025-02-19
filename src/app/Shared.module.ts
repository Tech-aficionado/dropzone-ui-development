import { NgModule } from '@angular/core';
import { HomeTopNavComponent } from './components/home-top-nav/home-top-nav.component';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { TableModule } from 'primeng/table';
import { OverlayPanelModule } from 'primeng/overlaypanel';
@NgModule({
  declarations: [HomeTopNavComponent],
  exports: [
    HomeTopNavComponent,
    InputGroupModule,
    TableModule,
    OverlayPanelModule,
    InputGroupAddonModule,
  ],
})
export class SharedModule {}
