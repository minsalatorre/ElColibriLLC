import { Component, Input } from '@angular/core';
import { MembersService } from '../members.service';
import { MemberInfo } from '../member-info';

@Component({
  selector: 'app-aboutus-details',
  templateUrl: './aboutus-details.component.html',
  styleUrls: ['./aboutus-details.component.css']
})
export class AboutusDetailsComponent {

  constructor(public MembersService: MembersService){}
  @Input() member!: MemberInfo;
  

}
