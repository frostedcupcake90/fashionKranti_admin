import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryTwoComponent } from './add-category-two.component';

describe('AddCategoryTwoComponent', () => {
  let component: AddCategoryTwoComponent;
  let fixture: ComponentFixture<AddCategoryTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCategoryTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCategoryTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
