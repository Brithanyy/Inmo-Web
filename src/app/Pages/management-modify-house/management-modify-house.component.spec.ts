import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementModifyHouseComponent } from './management-modify-house.component';

describe('ManagementModifyHouseComponent', () => {
  let component: ManagementModifyHouseComponent;
  let fixture: ComponentFixture<ManagementModifyHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementModifyHouseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementModifyHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
