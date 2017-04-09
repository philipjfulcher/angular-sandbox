import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { OAuthService } from 'angular2-oauth2/oauth-service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
  ffseUrl = "https://ffse-sprint.hachtest.com/odata/v15.1/Users";
  headers = new Headers({
    "Authorization": "Bearer " + this.oauthService.getAccessToken()
  });

  constructor(private http : Http, private oauthService : OAuthService) { }

  getUsers() {
    return this.http.get(this.ffseUrl, {headers: this.headers}).toPromise();           
  }

  saveUser(user) {
    return this.http.post(this.ffseUrl, user, {headers: this.headers}).toPromise();           
  }

}
