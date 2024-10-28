import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementModifyCommerceComponent } from './management-modify-commerce.component';

describe('ManagementModifyCommerceComponent', () => {
  let component: ManagementModifyCommerceComponent;
  let fixture: ComponentFixture<ManagementModifyCommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementModifyCommerceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementModifyCommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
