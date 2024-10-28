import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementModifyLandComponent } from './management-modify-land.component';

describe('ManagementModifyLandComponent', () => {
  let component: ManagementModifyLandComponent;
  let fixture: ComponentFixture<ManagementModifyLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementModifyLandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementModifyLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
