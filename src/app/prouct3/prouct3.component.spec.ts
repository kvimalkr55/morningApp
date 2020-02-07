import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prouct3Component } from './prouct3.component';

describe('Prouct3Component', () => {
  let component: Prouct3Component;
  let fixture: ComponentFixture<Prouct3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prouct3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prouct3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
