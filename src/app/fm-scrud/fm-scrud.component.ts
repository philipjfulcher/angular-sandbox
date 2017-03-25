import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fm-scrud',
  templateUrl: './fm-scrud.component.html',
  styleUrls: ['./fm-scrud.component.scss']
})
export class FmScrudComponent implements OnInit {
  selectedUser : any;

  constructor() { }

  ngOnInit() {
    
  }

  updateSelectedUser(user) {
    this.selectedUser = user;
  }

}
