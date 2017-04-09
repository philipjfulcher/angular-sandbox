import { Component, OnInit, Input } from '@angular/core';
import { WindowService } from '../window.service';
import { ScrudServiceService } from '../fm-scrud/scrud-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'fm-scrud-details',
  templateUrl: './scrud-details.component.html',
  styleUrls: ['./scrud-details.component.scss']
})
export class ScrudDetailsComponent implements OnInit {
  user : any;
  mode : string;
  modes : any;
  title : string;
  form: FormGroup;

  private showBackButton : Boolean;

  constructor(private windowService : WindowService, public scrudService : ScrudServiceService, private formBuilder : FormBuilder) { }

  ngOnInit() {
    this.modes = this.scrudService.modes;

    this.windowService.currentSize.subscribe((currentSize) => {
      if(currentSize == 'xsmall' || currentSize == 'xsmall') {
        this.showBackButton = true;
      } else {
        this.showBackButton = false;
      }
    })

    this.scrudService.selectedUser.subscribe(selectedUser => this.user = selectedUser);
    this.scrudService.currentMode$.subscribe(currentMode => {
      this.mode = currentMode;
      if(this.mode == this.modes.add) {
        this.title = 'Add New User';
      } else if(this.mode == this.modes.edit) {
        this.title = this.user.firstName + ' ' + this.user.lastName;
      }
    });

    this.form = this.formBuilder.group({        
      firstName:     [this.user.firstName, Validators.required],        
      lastName: [this.user.lastName, Validators.required],        
      email:    [this.user.email, [Validators.required]] 
    });
  }

  goBack() {
    this.scrudService.selectUser(this.scrudService.defaultUser);
  }

  onSubmit() {
    this.user = this.prepareToSaveUser();
    this.scrudService.saveUser(this.user);
  }

  prepareToSaveUser() {
    const formModel = this.form.value;

    // return new `Hero` object containing a combination of original hero value(s)
    // and deep copies of changed form model values
    let userToSave = {
      firstName: formModel.firstName as string,
      lastName: formModel.lastName as string,
      email: formModel.email as string
    };

    // if(typeof this.user.id != 'undefined') {
    //   userToSave.id = this.user.id;
    // }

    return userToSave;
  }

}
