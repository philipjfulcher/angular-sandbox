import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrudDetailsComponent } from './scrud-details.component';

describe('ScrudDetailsComponent', () => {
  let component: ScrudDetailsComponent;
  let fixture: ComponentFixture<ScrudDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrudDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrudDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
