import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementHouseDetailComponent } from './management-house-detail.component';

describe('ManagementHouseDetailComponent', () => {
  let component: ManagementHouseDetailComponent;
  let fixture: ComponentFixture<ManagementHouseDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementHouseDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementHouseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
