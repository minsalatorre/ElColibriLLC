import { LocationsService } from './../locations.service';
import { Component,  Input } from '@angular/core';
import { Locationdetails } from '../locationdetails';

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
