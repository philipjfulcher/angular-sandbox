import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'fm-scrud-list',
  templateUrl: './scrud-list.component.html',
  styleUrls: ['./scrud-list.component.scss']
})
export class ScrudListComponent implements OnInit {
  @Output() onChangeSelectedUser: EventEmitter<any> = new EventEmitter();

  users : any[] = [
    {
      id: 1,
      name: 'Philip Fulcher'
    },
    {
      id: 2,
      name: 'Patrick Rogers-Ostema'
    },
    {
      id: 3,
      name: 'Aaron Jarrete'
    }
  ] ;

  constructor() { }

  ngOnInit() {
  }

  selectUser(user: any): void {
      this.onChangeSelectedUser.emit(user);
  }

}
