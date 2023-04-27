import { Component } from '@angular/core';

@Component({
  selector: 'pm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  pageTitle:string = "My app vote";
  menu1:string = "Home";
  menu2:string = "Participants";
  menu3:string = "Regions";
  menu4:string = "About-Us";
  menu5:string = "Contact";
  style:string = "Bold";
}
