import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fm-scrud-details',
  templateUrl: './scrud-details.component.html',
  styleUrls: ['./scrud-details.component.scss']
})
export class ScrudDetailsComponent implements OnInit {
  @Input() user : any;

  constructor() { }

  ngOnInit() {

  }

}
