import { Component, OnInit } from '@angular/core';
import { ScrudServiceService } from './scrud-service.service';

@Component({
  selector: 'app-fm-scrud',
  templateUrl: './fm-scrud.component.html',
  styleUrls: ['./fm-scrud.component.scss']
})
export class FmScrudComponent implements OnInit {
  selectedUser : any;

  constructor(private scrudServiceService : ScrudServiceService) { }

  ngOnInit() {
    this.scrudServiceService.selectedUser.subscribe(
      selectedUser => this.selectedUser = selectedUser
    )
  }

}
