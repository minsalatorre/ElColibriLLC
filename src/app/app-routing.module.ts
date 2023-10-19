import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LocationsDetailsComponent } from './locations-details/locations-details.component';
import { AboutusDetailsComponent } from './aboutus-details/aboutus-details.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Home page'
  },
  {
    path: 'locations',
    component: LocationsDetailsComponent,
    title: 'Locations page'
  },
  {
    path: 'aboutus',
    component: AboutusDetailsComponent,
    title: 'AboutUs page'
  },
  {
    path: 'menu',
    component: MenuComponent,
    title: 'Menu page'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
