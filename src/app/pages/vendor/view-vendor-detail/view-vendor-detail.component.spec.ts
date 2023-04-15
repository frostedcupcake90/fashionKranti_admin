import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVendorDetailComponent } from './view-vendor-detail.component';

describe('ViewVendorDetailComponent', () => {
  let component: ViewVendorDetailComponent;
  let fixture: ComponentFixture<ViewVendorDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVendorDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewVendorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
