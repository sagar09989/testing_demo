import { Directive,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {

  constructor() { }

  @HostBinding('class.active') myclass:any


  @HostListener('click') myclick(){
    //  alert('clicked')
    // this.renderer.setStyle(this.el.nativeElement,'background','blue')
    this.myclass=!this.myclass
   }

}
