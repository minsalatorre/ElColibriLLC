import { Component } from '@angular/core';
import { faLocationPin, faPhone} from '@fortawesome/free-solid-svg-icons';
import { faEnvelope as farEnvelope, faAddressBook as farSquare } from '@fortawesome/free-regular-svg-icons';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],

})
export class ContactUsComponent {
  faLocation=faLocationPin;
  farEnvelope=farEnvelope;
  faPhone=faPhone

  faInstagram=faInstagram
  faFacebook=faFacebook

  goToLink(url: string){
    window.open(url, "_blank");
}
}
