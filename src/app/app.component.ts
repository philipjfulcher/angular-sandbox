import { Component } from '@angular/core';
import { OAuthService } from 'angular2-oauth2/oauth-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fmScrud Example App';

  constructor(private oauthService : OAuthService) {
    // Login-Url
        this.oauthService.loginUrl = "https://ffaa-sprint.hachtest.com/core/connect/authorize"; //Id-Provider?
        
        // URL of the SPA to redirect the user to after login
        this.oauthService.redirectUri = window.location.origin + "/fcwb/app/index.html#/home?"
        
        // The SPA's id. Register SPA with this id at the auth-server
        this.oauthService.clientId = "IOS.ImplicitFlow";
        
        // The name of the auth-server that has to be mentioned within the token
        this.oauthService.issuer = null;
 
        // set the scope for the permissions the client should request
        this.oauthService.scope = "openid FFAccessAPI";
        
        // set to true, to receive also an id_token via OpenId Connect (OIDC) in addition to the
        // OAuth2-based access_token
        this.oauthService.oidc = true;
        
        // Use setStorage to use sessionStorage or another implementation of the TS-type Storage
        // instead of localStorage
        this.oauthService.setStorage(sessionStorage);
        
        // To also enable single-sign-out set the url for your auth-server's logout-endpoint here
        this.oauthService.logoutUrl = "https://ffaa-sprint.hachtest.com/core/logout/?id_token={{id_token}}";
        
        // This method just tries to parse the token within the url when
        // the auth-server redirects the user back to the web-app
        // It dosn't initiate the login
        this.oauthService.tryLogin({onTokenReceived: context => {
        //
        // Output just for purpose of demonstration
        // Don't try this at home ... ;-)
        // 
        console.debug("logged in");
        console.debug(context);
    }});
     
  }

   login() {
      this.oauthService.initImplicitFlow();
    } 
}
