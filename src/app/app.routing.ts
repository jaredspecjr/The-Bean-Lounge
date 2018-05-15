import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { AdminComponent }   from './admin/admin.component';
const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'bags/:id',
    component: ItemDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  }

];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
