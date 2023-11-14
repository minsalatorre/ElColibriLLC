import { Component, Input } from '@angular/core';
import { MenuService } from '../menu.service';
import { Menuitem } from '../menuitem';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(public menuService: MenuService){}
  @Input() item!: Menuitem;

  menu = this.menuService.menu;
  seasonal = this.menuService.seasonal;
  proteins = this.menuService.proteins;
  flavors = this.menuService.flavors;
}
