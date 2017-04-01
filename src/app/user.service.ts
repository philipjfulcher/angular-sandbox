import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { OAuthService } from 'angular2-oauth2/oauth-service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

  constructor(private http : Http, private oauthService : OAuthService) { }

  getUsers() {
    let ffseUrl = "https://ffse-sprint.hachtest.com/odata/v15.1/Users";

    let headers = new Headers({
      "Authorization": "Bearer " + this.oauthService.getAccessToken()
    });

    return this.http.get(ffseUrl, {headers: headers}).toPromise();
              
  }

}
