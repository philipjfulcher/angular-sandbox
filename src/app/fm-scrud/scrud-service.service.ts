import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import { UserService } from '../user.service';

import { OAuthService } from 'angular2-oauth2/oauth-service';

@Injectable()
export class ScrudServiceService {
  public defaultUser = {
    id: null,
    firstName: '',
    lastName: ''
  };

  private _users: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  modes = {
    add: 'add',
    edit: 'edit'
  }
  private currentMode = this.modes.add;

  public users: Observable<any> = this._users.asObservable();

  private selectedUserObject : any;

  private selectedUserSubject: BehaviorSubject<any> = new BehaviorSubject(this.defaultUser);

  public selectedUser: Observable<any> = this.selectedUserSubject.asObservable();

  private currentModeSubject: BehaviorSubject<any> = new BehaviorSubject(this.currentMode);

  public currentMode$: Observable<any> = this.currentModeSubject.asObservable();

  constructor(private userService : UserService, private oAuthService : OAuthService) { 
    this.userService.getUsers()
        .then( response => this._users.next(response.json().value) );
  }

  selectUser(user) {
    if(user == this.selectedUserObject) {
      this.selectedUserObject = this.defaultUser;
      this.currentMode = this.modes.add;
    } else {
      this.selectedUserObject = user;
      this.currentMode = this.modes.edit;
    }

    this.selectedUserSubject.next(this.selectedUserObject);
    this.currentModeSubject.next(this.currentMode)
  }

  saveUser(user) {
    let claims = this.oAuthService.getIdentityClaims();
    let tenantId =  JSON.parse(claims.Tenants)[0].id; 

    user.tenantId = tenantId;
    
    this.userService.saveUser(user).then(function (savedUser) {
      this.userService.getUsers()
        .then( response => this._users.next(response.json().value) );
    });
  }

}
