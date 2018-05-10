import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaserequestApprovalComponent } from './purchaserequest-approval.component';

describe('PurchaserequestApprovalComponent', () => {
  let component: PurchaserequestApprovalComponent;
  let fixture: ComponentFixture<PurchaserequestApprovalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaserequestApprovalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaserequestApprovalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
