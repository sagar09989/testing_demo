import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Comp1Component } from '../comp1/comp1.component';
declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,AfterViewInit  {

  username="pankaj";
  constructor(private renderer:Renderer2) { }
  @ViewChild("myname") myname: ElementRef;
  @ViewChild(Comp1Component) child:Comp1Component;


  @HostListener('click') myclick(){
    // alert('alert box'); 
  }

  @HostListener('window:scroll',['$event']) myscroll(){
    console.log('scrolling');
    
  }


  ngOnInit(): void {
    // $(window).scroll(function(){
    //   console.log('window scrolling')
    // })
  }
  ngAfterViewInit(): void {
    // console.log(this.myname)
    this.renderer.setStyle(this.myname.nativeElement,'background','red')
    this.renderer.setStyle(this.myname.nativeElement,'color','white')
    this.renderer.addClass(this.myname.nativeElement,'myclass')
    this.renderer.setAttribute(this.myname.nativeElement,'title','this is title')
    // this.myname.nativeElement.style.backgroundColor='blue'
    // // this.myname.nativeElement.classList='boxblue'
    // // this.myname.nativeElement.innerHTML='this is update html'
    console.log(this.child)
  }
  changechildproperty(){
    this.child.username='rajyaguru'
  }
  callchildmethod(){
    this.child.clickme() 
  }
}
