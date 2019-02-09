import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LegendPage } from './legend.page';

describe('LegendPage', () => {
  let component: LegendPage;
  let fixture: ComponentFixture<LegendPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LegendPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LegendPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
