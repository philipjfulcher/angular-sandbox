import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

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

  private _currentWidth : Number;
  private _currentSize: String;

  private currentWidthSubject: BehaviorSubject<any> = new BehaviorSubject(0);

  public currentWidth: Observable<any> = this.currentWidthSubject.asObservable();

  private currentSizeSubject: BehaviorSubject<any> = new BehaviorSubject('');

  public currentSize: Observable<any> = this.currentSizeSubject.asObservable();
  
  constructor() { 
    this.setWidth();
    window.addEventListener("resize", (event) => this.setWidth());
  }

  setWidth() {
    this._currentWidth = window.innerWidth;

    this._currentSize = this.breakpoints.filter(breakpoint => this._currentWidth > breakpoint.begin && this._currentWidth < breakpoint.end)[0].name;

    this.currentWidthSubject.next(this._currentWidth);
    this.currentSizeSubject.next(this._currentSize);

  }

}
