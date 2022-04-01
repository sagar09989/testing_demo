import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() productselected:boolean=false;
  @Input() selectedproduct:string='';
  @Output() addedproduct = new EventEmitter<any>()

  onaddclick(){
    this.addedproduct.emit(this.selectedproduct)

  }
}
