import { Component, OnInit, Input } from '@angular/core';
import { WindowService } from '../window.service';
import { ScrudServiceService } from '../fm-scrud/scrud-service.service';

@Component({
  selector: 'fm-scrud-details',
  templateUrl: './scrud-details.component.html',
  styleUrls: ['./scrud-details.component.scss']
})
export class ScrudDetailsComponent implements OnInit {
  @Input() user : any;

  private showBackButton : Boolean;

  constructor(private windowService : WindowService, private scrudService : ScrudServiceService) { }

  ngOnInit() {
    this.windowService.currentSize.subscribe((currentSize) => {
      if(currentSize == 'xsmall' || currentSize == 'xsmall') {
        this.showBackButton = true;
      } else {
        this.showBackButton = false;
      }
    })
  }

  goBack() {
    this.scrudService.selectUser(this.scrudService.defaultUser);
  }

}
