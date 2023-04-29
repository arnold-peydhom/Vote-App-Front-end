import { NgModule } from '@angular/core';
import { ParticipantComponent } from '../participant/participant.component';
import { RegionsComponent } from '../regions/regions.component';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactComponent } from '../contact/contact.component';
import { RouterModule } from '@angular/router';
import { RegionListComponent } from '../regions/region-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ParticipantComponent,
    RegionsComponent,
    AboutUsComponent,
    ContactComponent,
    RegionListComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forChild([
      {path: 'participants', component: ParticipantComponent},
      {path: 'regions', component: RegionsComponent},
      {path: 'about-us', component: AboutUsComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'region-list', component: RegionListComponent}

      
  ]),

]
  
})
export class RouteModule { }
