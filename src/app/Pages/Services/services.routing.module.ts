import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainServicePageComponent } from './main-service-page/main-service-page.component';
import { ProductSearchPageComponent } from './product-search-page/product-search-page.component';

const AppName = ' |  DropZone';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'main',
        pathMatch: 'full',
      },
      {
        path: 'main',
        component: MainServicePageComponent,
        title: `Services${AppName}`,
      },
      {
        path: 'product-search',
        component: ProductSearchPageComponent,
        title: `Product Search${AppName}`,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceRouteModule {}
