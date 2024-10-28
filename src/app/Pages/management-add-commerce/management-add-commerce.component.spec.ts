import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementAddCommerceComponent } from './management-add-commerce.component';

describe('ManagementAddCommerceComponent', () => {
  let component: ManagementAddCommerceComponent;
  let fixture: ComponentFixture<ManagementAddCommerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementAddCommerceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementAddCommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
