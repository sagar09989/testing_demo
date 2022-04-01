import { Component, OnInit, ViewChild } from '@angular/core';
import { ShreehariproductsService } from '../appservices/shreehariproducts.service';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {

  constructor(private _shreehariproducts:ShreehariproductsService) { }
  fetching = false;
  datatitle = this._shreehariproducts.getdatatitle();
  products = [
    {
      id:'p1',
      name:'laptop',
      price:30000
    },
    // {
    //   id:'p2',
    //   name:'mobile',
    //   price:10000
    // },
    // {
    //   id:'p3',
    //   name:'tv',
    //   price:35000
    // },
    // {
    //   id:'p4',
    //   name:'friz',
    //   price:33000
    // },
  ]

  onaddproducts(id:any,name:any,price:any){
    if(this.editmode){
      this.products[this.editindex] = {
        id:id.value,
        name:name.value,
        price:price.value
      }
      this.editmode = false;
      this.id.nativeElement.value = '';
      this.name.nativeElement.value = '';
      this.price.nativeElement.value = '';
    }else{
      this.products.push({
        id:id.value,
        name:name.value,
        price:price.value
      })
      this.id.nativeElement.value = '';
      this.name.nativeElement.value = '';
      this.price.nativeElement.value = '';    
    }
    this.onsaveproducts();
  }
  onsaveproducts(){
    this._shreehariproducts.saveproducts(this.products).subscribe(
      (response) => console.log(response),
      (err) => console.log(err)
    )
  }
  onfetchproducts(){
    this.fetching = true;
    this._shreehariproducts.fetchproducts().subscribe(
      (response) => {
        // console.log(response)
        const data = JSON.stringify(response)
        // console.log(data);
        this.products = JSON.parse(data)
        this.fetching = false; 
      },
      (err) => console.log(err)
    )
  }
  ondeleteproduct(id:number){
    if(confirm('do you want to delete this product?')){
      this.products.splice(id,1)
      this.onsaveproducts();
    }
  }

  @ViewChild('id') id:any;
  @ViewChild('name') name:any;
  @ViewChild('price') price:any;

  editmode:boolean=false;
  editindex:any;

  oneditproduct(index:number){
    this.editmode = true;
    this.editindex=index;
    console.log(this.products[index]);
    this.id.nativeElement.value = this.products[index].id;
    this.name.nativeElement.value = this.products[index].name;
    this.price.nativeElement.value = this.products[index].price;
  }

  ngOnInit(): void {
    this.onfetchproducts();
  }

}
