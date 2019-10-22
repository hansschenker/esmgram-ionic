import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAddPage } from './post-add.page';

describe('PostAddPage', () => {
  let component: PostAddPage;
  let fixture: ComponentFixture<PostAddPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostAddPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
