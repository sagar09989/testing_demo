import {Component,OnInit,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() productselected:boolean = false;
  @Input() selectedproduct:string='';
  @Output() addedproduct = new EventEmitter<any>();
  
  onaddproject(){
    this.addedproduct.emit(this.selectedproduct);
  }
}
