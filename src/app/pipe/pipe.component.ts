import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  value='this is test value'
  namesearch:any
  namearr = [
    'myname',
    'mysur',
    'my villegeasdadasd',
    'my cityadsadads',
    'my bagfweewrewr',
    'my systemczxzxcz',
    'my ruleszcxczx',
    'my pageszfdfsfdsdf',
  ];

  productarr = [
    {srno:1,name:'mobile',price:'7000 Rs',avaibility:'available'},
    {srno:2,name:'tv',price:'20000 Rs',avaibility:'not available'},
    {srno:3,name:'laptop',price:'30000 Rs',avaibility:'available'},
    {srno:4,name:'machine',price:'35000 Rs',avaibility:'not available'},
    {srno:5,name:'mobile(samsung)',price:'7000 Rs',avaibility:'available'},
    {srno:6,name:'tv(sansui)',price:'20000 Rs',avaibility:'available'},
    {srno:7,name:'laptop(hp)',price:'50000 Rs',avaibility:'not available'},
    {srno:8,name:'mobile(nokia)',price:'4000 Rs',avaibility:'not available'},
  ];
  onaddproduct(add:any){
    this.productarr.push({
      srno:8,
      name:add.value,
      price:'4000 Rs',
      avaibility:'not available'
    })
  }
}
