import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementAddLandComponent } from './management-add-land.component';

describe('ManagementAddLandComponent', () => {
  let component: ManagementAddLandComponent;
  let fixture: ComponentFixture<ManagementAddLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementAddLandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementAddLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
