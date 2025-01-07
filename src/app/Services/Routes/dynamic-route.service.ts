import { Injectable, Type } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AdminComponent } from 'src/app/Pages/admin/admin.component';
import { AuthTempPageComponent } from 'src/app/Pages/Auth/auth-temp-page/auth-temp-page.component';

interface SerializableRoute {
  path: string;
  componentPath: string;
  data?: any;
  children?: SerializableRoute[];
}

@Injectable({
  providedIn: 'root'
})
export class DynamicRouteService {
  private componentRegistry: { [key: string]: Type<any> } = {
    'admin': AdminComponent,
    'auth-temp': AuthTempPageComponent
  };

  constructor(private router: Router) {
    this.initializeRoutes();
  }

  public initializeRoutes() {
    const routes = this.loadRoutes();
    if (routes.length) {
      this.updateRouterConfig(routes);
    }
  }

  addRoute(path: string, component: Type<any>, data?: any) {
    const newRoute: Route = {
      path,
      component,
      data
    };
    
    const currentRoutes = this.loadRoutes();
    currentRoutes.push(newRoute);
    
    this.saveRoutes(currentRoutes);
    this.updateRouterConfig(currentRoutes);
  }

  removeRoute(path: string) {
    const currentRoutes = this.loadRoutes();
    const filteredRoutes = currentRoutes.filter(route => route.path !== path);
    
    this.saveRoutes(filteredRoutes);
    this.updateRouterConfig(filteredRoutes);
  }

  private updateRouterConfig(routes: Route[]) {
    const baseRoutes = this.router.config.filter(route => 
      !this.componentRegistry[this.getComponentPath(route.component)]
    );
    this.router.resetConfig([...baseRoutes, ...routes]);
  }

  registerComponent(path: string, component: Type<any>) {
    this.componentRegistry[path] = component;
  }

  private serializeRoute(route: Route): SerializableRoute {
    return {
      path: route.path!,
      componentPath: this.getComponentPath(route.component),
      data: route.data,
      children: route.children?.map(child => this.serializeRoute(child))
    };
  }

  private deserializeRoute(serialized: SerializableRoute): Route {
    const route: Route = {
      path: serialized.path,
      component: this.componentRegistry[serialized.componentPath],
      data: serialized.data
    };
    
    if (serialized.children) {
      route.children = serialized.children.map(child => this.deserializeRoute(child));
    }
    
    return route;
  }

  saveRoutes(routes: Route[]) {
    const serializedRoutes = routes.map(route => this.serializeRoute(route));
    sessionStorage.setItem('dynamicRoutes', JSON.stringify(serializedRoutes));
  }

  loadRoutes(): Route[] {
    const saved = sessionStorage.getItem('dynamicRoutes');
    if (!saved) return [];
    
    const serializedRoutes = JSON.parse(saved);
    return serializedRoutes.map((route: SerializableRoute) => this.deserializeRoute(route));
  }

  private getComponentPath(component: any): string {
    return Object.entries(this.componentRegistry)
      .find(([_, comp]) => comp === component)?.[0] || '';
  }

  clearRoutes() {
    sessionStorage.removeItem('dynamicRoutes');
    this.updateRouterConfig([]);
  }
}
