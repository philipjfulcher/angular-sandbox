import { Component, OnInit } from '@angular/core';
import { ScrudServiceService } from './scrud-service.service';
import { WindowService } from '../window.service';
@Component({
  selector: 'app-fm-scrud',
  templateUrl: './fm-scrud.component.html',
  styleUrls: ['./fm-scrud.component.scss']
})
export class FmScrudComponent implements OnInit {
  selectedUser : any;
  showList : boolean;
  showDetails: boolean;

  constructor(private scrudServiceService : ScrudServiceService, private windowService : WindowService) { }

  ngOnInit() {
    this.checkWidth();
    this.scrudServiceService.selectedUser.subscribe(
      selectedUser => {
        this.selectedUser = selectedUser;
      }
    );


  }

  checkWidth() {
    if(this.windowService.currentSize == 'xsmall' || this.windowService.currentSize == 'xsmall') {
      this.showList = true;
      this.showDetails = false;
    } else {
      this.showList = true;
      this.showDetails = true;
    }
  }

}
