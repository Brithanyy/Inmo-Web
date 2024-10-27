import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementPropertyDetailComponent } from './management-property-detail.component';

describe('ManagementPropertyDetailComponent', () => {
  let component: ManagementPropertyDetailComponent;
  let fixture: ComponentFixture<ManagementPropertyDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementPropertyDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementPropertyDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
