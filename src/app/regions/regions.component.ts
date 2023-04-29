import { Component, OnInit } from '@angular/core';
import { Regions } from '../Models/regions.model';
import { RegionsService } from '../Services/regions.service';


@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {
  constructor(private regionservice:RegionsService){}

  region:Regions;
  
  ngOnInit(): void {
    this.region = new Regions();
  }
  onSave(){
    this.regionservice.createRegion(this.region).subscribe()
  }
}
