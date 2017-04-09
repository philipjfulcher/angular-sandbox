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
  showDetails : boolean;
  isResponsive : boolean;

  constructor(private scrudServiceService : ScrudServiceService, private windowService : WindowService) { }

  ngOnInit() {
    this.scrudServiceService.selectedUser.subscribe(
      selectedUser => {
        if(this.isResponsive) {
          if(selectedUser === this.scrudServiceService.defaultUser) {
            this.showList = true;
            this.showDetails = false;
          } else {
            this.showList = false;
            this.showDetails = true;
          }
        }
      }
    );

    this.windowService.currentSize.subscribe((currentSize) => {
      if(currentSize == 'xsmall' || currentSize == 'xsmall') {
        this.isResponsive = true;
        this.showList = true;
        this.showDetails = false;
      } else {
        this.isResponsive = false;
        this.showList = true;
        this.showDetails = true;
      }
    })


  }
}
