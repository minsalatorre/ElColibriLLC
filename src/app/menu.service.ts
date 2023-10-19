import { Injectable } from '@angular/core';
import { Menuitem } from './menuitem';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  birriaList : Menuitem[] = [
    {
      id: 0,
      photo: '/assets/birria-tacos.jpg',
      name: 'Taco Birria',
      price: '$4.00',
      description: 'Beef braised in a bold, aromatic chili sauce until falls apart. Made with corn tortilla.'
    },
    {
      id: 1,
      photo: '/assets/quesabirrias.jpg',
      name: 'Quesa Birria',
      price: '$5.00',
      description: 'Is like the taco birria but with melted cheese.'
    }
  ];


  constructor() { }
}
