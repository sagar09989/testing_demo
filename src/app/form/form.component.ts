import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild('myform') myform:any
  
  constructor() { }

  ngOnInit(): void {
  }
  defaultvalue = 'angular';
  username = '';
  genders = [
    {id:1,value:'male'},
    {id:2,value:'female'},
  ];
  defaultgender='male'

  onsubmit(form:any){
    console.log(this.myform.value); 
  }
  setusername(){
    // this.myform.setValue({
    //   userdetails:{
    //     username : 'bapa sitaram',
    //     email : ''
    //   },
    //   course: '',
    //   gender : ''
    // })
    this.myform.form.patchValue({
      userdetails : {
        username : 'bapa sitaram'
      }
    })
  }

}
