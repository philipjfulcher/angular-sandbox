import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FmScrudComponent } from './fm-scrud/fm-scrud.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrudListComponent } from './scrud-list/scrud-list.component';
import { ScrudDetailsComponent } from './scrud-details/scrud-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FmScrudComponent,
    ScrudListComponent,
    ScrudDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }