import { Injectable } from '@angular/core';
import { Locationdetails } from './locationdetails';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  locationList: Locationdetails[] = [
    {
      id: 0,
      photo: '/assets/bloomfieldfm.jpg',
      name: 'Bloomfield Farmers Market',
      day: 'Saturdays',
      hours: '9:00am-1:00pm',
      direction: 'https://maps.app.goo.gl/CnmWP86ub7usB91g8',
      sm: 'https://www.instagram.com/bloomfieldpgh/'
    },
    {
      id: 1,
      photo: '/assets/swissvalefm.jpg',
      name: 'Swissvale Farmers Market',
      day: 'Saturdays',
      hours: '9:00am-2:00pm',
      direction: 'https://maps.app.goo.gl/KVJgHQHRzDuu7VPR8',
      sm: 'https://www.instagram.com/theswissvalefarmersmarket/'
    },
    {
      id: 2,
      photo: '/assets/squirrelfm.jpg',
      name: 'Squirrel Hill Farmers Market',
      day: 'Sundays',
      hours: '9:00am-1:00pm',
      direction: 'https://maps.app.goo.gl/wb1jXPMDDuqsRAui7',
      sm: 'https://www.facebook.com/pages/Squirrel-Hill-Farmers-Market/262747557260918'
    },
  ];

  getAllLocations(): Locationdetails[] {
    return this.locationList;
  }

  constructor() { }
}
