import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SubscribeComponent } from './contact/subscribe/subscribe.component';
import { ContactUsComponent } from './contact/contact-us/contact-us.component';
import { LocationsComponent } from './locations/locations.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LocationsListComponent } from './locations-list/locations-list.component';
import { LocationsDetailsComponent } from './locations-details/locations-details.component';
import { AboutusDetailsComponent } from './aboutus-details/aboutus-details.component';
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    LocationsComponent,
    LocationsDetailsComponent,
    LocationsListComponent,
    AboutusComponent,
    NavbarComponent,
    ContactComponent,
    ContactUsComponent,
    SubscribeComponent,
    AboutusDetailsComponent,
    MenuComponent

  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FontAwesomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
