import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Prouct2Component } from './prouct2.component';

describe('Prouct2Component', () => {
  let component: Prouct2Component;
  let fixture: ComponentFixture<Prouct2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Prouct2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Prouct2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
