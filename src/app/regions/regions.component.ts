import { Component, OnInit } from '@angular/core';
// import { Regions } from '../Models/regions.model';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { RegionsService } from '../Services/regions.service';

@Component({
  selector: 'app-regions',
  templateUrl: './regions.component.html',
  styleUrls: ['./regions.component.css']
})
export class RegionsComponent implements OnInit {

  // formGroup!:FormGroup;
  // constructor(public formBuilder:FormBuilder, private regionService: RegionsService){}

  ngOnInit(): void {
    // this.formGroup=this.formBuilder.group({
    //   label:[null, [Validators.required]] 
    // })
  }

  // onRegisterRegion():void{
  // const r = new Regions();
  // }
}
