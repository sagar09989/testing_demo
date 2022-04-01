import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ShreehariproductsService {

  url = 'https://shree-hari-cbfa2-default-rtdb.firebaseio.com/products.json';
  constructor(private http:HttpClient) { }
  saveproducts(products:any[]){
    // return this.http.post(this.url,products)
   return this.http.put(this.url,products)
  }
  fetchproducts(){
    return this.http.get(this.url)
  }
  getdatatitle(){
    return this.http.get('https://shree-hari-cbfa2-default-rtdb.firebaseio.com/datatitle.json')
  }
  
}
