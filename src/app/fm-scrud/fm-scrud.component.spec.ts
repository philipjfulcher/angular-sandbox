import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FmScrudComponent } from './fm-scrud.component';

describe('FmScrudComponent', () => {
  let component: FmScrudComponent;
  let fixture: ComponentFixture<FmScrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FmScrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FmScrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
