import { AfterContentInit, Component, ContentChild, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { TestdirectiveDirective } from '../appdirective/testdirective.directive';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit,AfterContentInit {

  @ContentChild('childcontent') childparagraph:ElementRef;

  @ViewChild(TestdirectiveDirective) mydir:TestdirectiveDirective
  constructor(private renderer:Renderer2) { }
  ngOnInit(): void {  
  } 
  ngAfterContentInit(): void {
    console.log(this.childparagraph);
    this.renderer.setStyle(this.childparagraph.nativeElement,'color','red')
  }
  username="default value"

  clickme(){
     alert(this.username)
     var text = this.renderer.createText('this is append child element')
     this.renderer.appendChild(this.childparagraph.nativeElement,text)
  }
  changecolor(color:any){
    this.mydir.changebg(color)
  }
}
