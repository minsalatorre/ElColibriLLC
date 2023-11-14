import { Injectable } from '@angular/core';
import { MemberInfo } from './member-info';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  membersList: MemberInfo[] = [
    {
      id: 0,
      photo: '/assets/jeimy.jpg',
      name: 'Jeimy Ibarra',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Mauris augue neque gravida in fermentum et sollicitudin ac orci.',
    },
    {
      id: 1,
      photo: '/assets/pedro.jpg',
      name: 'Pedro Ibarra',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Mauris augue neque gravida in fermentum et sollicitudin ac orci.',
    },
    {
      id: 2,
      photo: '/assets/gordita-prep.jpg',
      name: 'Rocio Ruiz',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aliquam etiam erat velit scelerisque in dictum non consectetur a. Mauris augue neque gravida in fermentum et sollicitudin ac orci.',
    }
  ];

      getAllMembers(): MemberInfo[] {
    return this.membersList;
  }

  constructor() { }
}
