import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form2',
  templateUrl: './form2.component.html',
  styleUrls: ['./form2.component.css']
})
export class Form2Component implements OnInit {
@ViewChild('myform') myform:any

username='';
defaultcourse='angular';
defaultgender='male';
genders = [
  {id:1,value:'male'},
  {id:2,value:'female'}
];
hobbys =[
  {id:1,value:'singing'},
  {id:2,value:'dancing'},
  {id:3,value:'playing'},
  {id:4,value:'acting'}
]

constructor() { }

  ngOnInit(): void {
  }
  onclick(form:any){
    console.log(this.myform.value)
  }
  setname(){
    // console.log(this.myform.form.value);
    
    this.myform.form.patchValue({
      userdetails : {
        username:'sagar savaliya',
      }
    })
  }



}
