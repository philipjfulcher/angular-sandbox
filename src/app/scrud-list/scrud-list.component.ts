import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ScrudServiceService } from '../fm-scrud/scrud-service.service';

@Component({
  selector: 'fm-scrud-list',
  templateUrl: './scrud-list.component.html',
  styleUrls: ['./scrud-list.component.scss']
})
export class ScrudListComponent implements OnInit {

  users : any[] = [];

  constructor( private scrudService: ScrudServiceService) { }

  ngOnInit() {
    this.scrudService.users.subscribe(
      (users) => this.users = users
    )
  }

  login() {

  }

}
