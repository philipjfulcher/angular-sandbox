import { Injectable } from '@angular/core';

@Injectable()
export class WindowService {

  breakpoints = [
    {
      name: 'xsmall',
      begin: 0,
      end: 575
    },
    {
      name: 'small',
      begin: 576,
      end: 767
    },
    {
      name: 'medium',
      begin: 768,
      end: 991
    },
    {
      name: 'large',
      begin: 992,
      end: 1199
    },
    {
      name: 'xlarge',
      begin: 1200,
      end: Infinity
    }
  ];

  currentWidth : Number;
  currentSize: Object;
  
  constructor() { 
    this.setWidth();
    window.addEventListener("resize", function() {
        console.log("Resize event!");
    });
  }

  setWidth() {
    this.currentWidth = window.innerWidth;

    this.currentSize = this.breakpoints.filter(breakpoint => this.currentWidth > breakpoint.begin && this.currentWidth < breakpoint.end)[0].name;
  }

}
