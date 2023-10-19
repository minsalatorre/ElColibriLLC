import { LocationsService } from './../locations.service';
import { Component,  Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Locationdetails } from '../locationdetails';
import {RouterLink, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-locations-list',
  templateUrl: './locations-list.component.html',
  styleUrls: ['./locations-list.component.css']
})
export class LocationsListComponent {


  constructor(public LocationsService: LocationsService){}
  @Input() location!: Locationdetails;
  locationDetailList: Locationdetails[] = [];

  goToLink(url: string){
    window.open(url, "_blank");
}
}
