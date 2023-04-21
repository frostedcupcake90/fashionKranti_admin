import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCategoryThreeComponent } from './add-category-three.component';

describe('AddCategoryThreeComponent', () => {
  let component: AddCategoryThreeComponent;
  let fixture: ComponentFixture<AddCategoryThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCategoryThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCategoryThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
