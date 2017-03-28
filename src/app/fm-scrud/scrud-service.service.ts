import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class ScrudServiceService {
  private storedUsers : any[] = [
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
  ];

  public defaultUser = {
    id: 0,
    name: 'New User'
  };

  private _users: BehaviorSubject<Array<any>> = new BehaviorSubject([]);

  public users: Observable<any> = this._users.asObservable();

  private selectedUserObject : any;

  private selectedUserSubject: BehaviorSubject<any> = new BehaviorSubject(this.defaultUser);

  public selectedUser: Observable<any> = this.selectedUserSubject.asObservable();

  constructor() { 
    this._users.next(this.storedUsers);
  }

  selectUser(user) {
    if(user == this.selectedUserObject) {
      this.selectedUserObject = this.defaultUser;
    } else {
      this.selectedUserObject = user;
    }

    this.selectedUserSubject.next(this.selectedUserObject);
  }

}
