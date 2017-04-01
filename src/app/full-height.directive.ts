import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[fmFullHeight]'
})
export class FullHeightDirective {

  constructor(private el: ElementRef) {
      this.updateHeight();
      window.addEventListener("resize", (event) => this.updateHeight());
  }

  updateHeight() {
      this.el.nativeElement.style.height = this.getDistanceToBottomOfBrowser()+'px';    
  }

  getDistanceToBottomOfBrowser() {
      let top = this.el.nativeElement.offsetParent.offsetTop;
      let size = window.innerHeight - top;
      return size;
  }


}
