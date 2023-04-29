import { Component , OnInit } from '@angular/core';
import { RegionsService } from '../Services/regions.service';
import { Regions } from '../Models/regions.model';

@Component({
  selector: 'app-region-list',
  templateUrl: './region-list.component.html',
  styleUrls: ['./region-list.component.css']
})
export class RegionListComponent implements OnInit {

ngOnInit(): void {
}
  
}
