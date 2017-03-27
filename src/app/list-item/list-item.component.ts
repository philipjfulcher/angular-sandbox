import { Component, OnInit, Input } from '@angular/core';
import { ScrudServiceService } from '../fm-scrud/scrud-service.service';

@Component({
  selector: 'fm-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {
  @Input() user : any;

  isSelected = false;

  constructor(private scrudServiceService : ScrudServiceService) { }

  ngOnInit() {
    this.scrudServiceService.selectedUser.subscribe(
      selectedUser => this.isSelected = (this.user == selectedUser)
    )
  }

  selectUser(user: any): void {
      this.scrudServiceService.selectUser(user);
  }

}
