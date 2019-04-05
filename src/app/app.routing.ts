import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StorepageComponent } from './storepage/storepage.component';
import { AboutComponent } from './about/about.component';
import { ItempageComponent } from './itempage/itempage.component';
import { StoreOwnerComponent} from './store-owner/store-owner.component';

const appRoutes: Routes = [
  {
  path: '',
  component: StorepageComponent
  },
  {
  path: 'about',
  component: AboutComponent
  },
  {
  path: 'items/:name',
  component: ItempageComponent
  },
  {
  path: 'owner-view',
  component: StoreOwnerComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
