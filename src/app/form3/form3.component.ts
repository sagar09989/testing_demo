import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms'; 

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {

  myreactiveform:any = FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.myreactiveform = new FormGroup({
        'username': new FormControl(null,[Validators.required,Validators.pattern('[A-Za-z]+$')]),
        'email' : new FormControl(null,[Validators.required,Validators.email]),
        'course' : new FormControl('angular'),
        'gender' : new FormControl('male'),
        'number' : new FormControl(null,[Validators.required,Validators.minLength(10),Validators.maxLength(10),Validators.pattern('[0-9]*')]),
        'skills': new FormArray ([
            new FormControl(null,Validators.required),
      ])
    });
  } 
  
  // get f(){
  //   return this.myreactiveform.controls;
  // }
  genders = [
    {
      id:1,
      value:'male'
    },
    {
      id:2,
      value:'female'
    }
  ]
  onsubmit(){
    const userdetails = {
      personaldetails:{
        username:this.myreactiveform.value.username,
        email:this.myreactiveform.value.email
      },
      mydetails:{
        course:this.myreactiveform.value.course,
        gender:this.myreactiveform.value.gender,
      },
      otherdetails:{
        number:this.myreactiveform.value.number,
        skill:this.myreactiveform.value.skill
      }
    }
    console.log(userdetails);
    this.myreactiveform.reset({
      'username':'',
      'email':'',
      'course':'angular',
      'gender':'male',
      'number':'',
      'skill':'',
    });
  }
  onaddclick(){
    this.myreactiveform.get('skills').push(new FormControl(null,Validators.required))
  }

}
