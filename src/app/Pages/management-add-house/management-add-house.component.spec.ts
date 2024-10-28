import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementAddHouseComponent } from './management-add-house.component';

describe('ManagementAddHouseComponent', () => {
  let component: ManagementAddHouseComponent;
  let fixture: ComponentFixture<ManagementAddHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementAddHouseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementAddHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
