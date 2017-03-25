import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fm-scrud-details',
  templateUrl: './scrud-details.component.html',
  styleUrls: ['./scrud-details.component.scss']
})
export class ScrudDetailsComponent implements OnInit {
  @Input() user : any;

  defaultUser = {
    id: 0,
    name: 'New User'
  }

  constructor() { }

  ngOnInit() {
    if(!this.user) {
      this.user = this.defaultUser;
    }
  }

}
