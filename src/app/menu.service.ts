import { Injectable } from '@angular/core';
import { Menuitem } from './menuitem';
import { __values } from 'tslib';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  productList : Menuitem[] = [
    {
      id: 0,
      section: 'Birria',
      photo: '/assets/birria-tacos.jpg',
      name: 'Taco Birria',
      price: '$4.00',
      description: 'Beef braised in a bold, aromatic chili sauce until falls apart. Made with corn tortilla.'
    },
    {
      id: 1,
      section: 'Birria',
      photo: '/assets/quesabirrias.jpg',
      name: 'Quesa Birria',
      price: '$5.00',
      description: 'This is like the corn tortilla taco birria but with melted cheese.'
    },
    {
      id: 2,
      section: 'Gorditas y Huaraches',
      photo: '/assets/gordita.jpg',
      name: 'Gordita',
      price: '$8.00',
      description: 'Thick corn tortillas that have a pocket in the middle are made for stuffing with protein and topped with lettuce and cheese.'
    },
    {
      id: 3,
      section: 'Gorditas y Huaraches',
      photo: '/assets/huarache-menu.jpg',
      name: 'Huarache',
      price: '$12.00',
      description: 'Thick corn dough, smashed beans placed at the center, shaped into an oblong. Topped with lettuce, protein, and cheese.'
    },
    {
      id: 4,
      section: 'Elotes',
      photo: '/assets/elote.jpg',
      name: 'Elote',
      price: '$5.00',
      description: 'Corn on the cob slathered in mayo and sprinkled with cotija cheese, tajin and lime.'
    },
    {
      id: 5,
      section: 'Elotes',
      photo: '/assets/vegan-elote.jpg',
      name: 'Vegan Elote',
      price: '$5.00',
      description: 'Corn on the cob slathered in vegan mayo and sprinkled with vegan cheese, tajin and lime.'
    },
    {
      id: 6,
      section: 'Drinks',
      photo: '/assets/tamarind-agua-fresca.jpg',
      name: 'Aguas Frescas',
      price: '$5.00',
      description: 'Our aguas frescas are made of fresh fruit, filtered water and vegan sugar.'
    },
  ];

  seasonal = [
    {
      id: 0,
      photo: '/assets/mango-on-a-stick.jpg',
      name: 'Mango on a stick'
    },
    {
      id: 1,
      photo: '/assets/tamal.jpg',
      name: 'Tamales'
    },
    {
      id: 2,
      photo: '/assets/pozole.jpg',
      name: 'Pozole'
    },
    {
      id: 0,
      photo: '/assets/torta-birria.jpg',
      name: 'Birria torta'
    }
  ]

  proteins = [
    {
      id: 0,
      name: 'BIRRIA',
      description: 'Beef braised in a bold, aromatic chili sauce until falls apart.',
      vegan: false
    },
    {
      id: 1,
      name: 'CHICKEN "TINGA"',
      description: 'Shredded chicken in a sauce made from tomatoes, chipotle chilis in adobo & onions.',
      vegan: false
    },
    {
      id: 2,
      name: 'SOY CHORIZO  (V)',
      description: 'Soy-based sausage alternative that has all the flavor of a good Mexican chorizo.',
      vegan: true
    },
    {
      id: 3,
      name: 'NOPALES (CACTUS) (V)',
      description: 'Chopped prickly pear cactus paddles (nopalitos), tomatoes, onions, and cilantro.',
      vegan: true
    },
    {
      id: 4,
      name: 'POTATOES (V)',
      description: 'Sautéed patatoes, onions, and bell peppers.',
      vegan: true
    },
  ]
  
  flavors = [
      {
        id: 0,
        flavor: 'Tamarind'
      },
      {
        id: 1,
        flavor: 'Mango'
      },
      {
        id: 2,
        flavor: 'Hibiscus'
      },
      {
        id: 3,
        flavor: 'Watermelon'
      },
      {
        id: 4,
        flavor: 'Cantaloupe'
      },
      {
        id: 5,
        flavor: 'Pineapple'
      },
      {
        id: 6,
        flavor: 'Strawberry Lemonade'
      },
      {
        id: 7,
        flavor: 'Almond Horchata Dairy Free'
      }
  ]
  
  
  menu = [
    {
      sectionTitle: 'Birria',
      items: this.productList.filter(items => items.section.includes('Birria'))
    },
    {
      sectionTitle: 'Gorditas y Huaraches',
      items: this.productList.filter(items => items.section.includes('Gorditas y Huaraches'))
    },
    {
      sectionTitle: 'Elotes',
      items: this.productList.filter(items => items.section.includes('Elotes'))
    },
    {
      sectionTitle: 'Aguas Frescas',
      items: this.productList.filter(items => items.section.includes('Drinks'))
    },
    

  ]

  constructor() { }
}
