import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  productselected:boolean=false;
  selectedproduct:string=''
  addedproduct:any;

  onselectproduct(product:any)
  {
    this.productselected=true;
    this.selectedproduct=product
  }
  onaddproduct(item:any){
    this.addedproduct=item;
  }


}
