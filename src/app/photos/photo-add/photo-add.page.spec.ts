import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoAddPage } from './photo-add.page';

describe('PhotoAddPage', () => {
  let component: PhotoAddPage;
  let fixture: ComponentFixture<PhotoAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
