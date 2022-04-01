import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appTestdirective]'
})
export class TestdirectiveDirective {

  constructor(private el:ElementRef, private renderer:Renderer2) {
    this.renderer.setStyle(this.el.nativeElement,'background','yellow')
   }
   
   changebg(color:string){
     this.renderer.setStyle(this.el.nativeElement,'background',color)
   }

   @HostBinding('style.background') bgcolor:any='green'
   @HostBinding('class.myclass') myclass:any
   @HostBinding('attr.title') mytitle:any



   @HostListener('click') myclick(){
    //  alert('clicked')
    // this.renderer.setStyle(this.el.nativeElement,'background','blue')
    this.bgcolor='blue';
    this.myclass='true'
    this.mytitle='this is text'
   }
   @HostListener('mouseover') mymouseover(){
    // alert('mouseover')
    // this.renderer.setStyle(this.el.nativeElement,'background','lightgrey')
  }
  @HostListener('mouseout') mymouseout(){
    // alert('mouseout')
    // this.renderer.setStyle(this.el.nativeElement,'background','white')
  }

}
