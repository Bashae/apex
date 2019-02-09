import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendsPage } from './legends.page';

describe('LegendsPage', () => {
  let component: LegendsPage;
  let fixture: ComponentFixture<LegendsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegendsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
