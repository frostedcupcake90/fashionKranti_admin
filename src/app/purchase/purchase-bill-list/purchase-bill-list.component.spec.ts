import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseBillListComponent } from './purchase-bill-list.component';

describe('PurchaseBillListComponent', () => {
  let component: PurchaseBillListComponent;
  let fixture: ComponentFixture<PurchaseBillListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseBillListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseBillListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
