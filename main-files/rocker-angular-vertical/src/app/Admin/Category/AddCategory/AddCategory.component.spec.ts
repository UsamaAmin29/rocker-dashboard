import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategory } from './AddCategory.component';

describe('AddCategory.Component.TsxComponent', () => {
  let component: AddCategory;
  let fixture: ComponentFixture<AddCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCategory ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
