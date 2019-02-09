import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachmentPage } from './attachment.page';

describe('AttachmentPage', () => {
  let component: AttachmentPage;
  let fixture: ComponentFixture<AttachmentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachmentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
