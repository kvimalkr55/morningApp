import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prouct1Component } from './prouct1.component';

describe('Prouct1Component', () => {
  let component: Prouct1Component;
  let fixture: ComponentFixture<Prouct1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prouct1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prouct1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
