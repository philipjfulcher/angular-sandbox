import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrudListComponent } from './scrud-list.component';

describe('ScrudListComponent', () => {
  let component: ScrudListComponent;
  let fixture: ComponentFixture<ScrudListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrudListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrudListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
