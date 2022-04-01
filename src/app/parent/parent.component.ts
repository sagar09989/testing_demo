import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  productselected:boolean = false;
  selectedproduct:string='';
  addedproduct:any;
  
  onselectproduct(product:any){
    this.productselected = true;
    this.selectedproduct=product;
  }
  onaddproduct(prodata:any){
    this.addedproduct=prodata;
  }
}
