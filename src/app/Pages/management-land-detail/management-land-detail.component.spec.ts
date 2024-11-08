import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementLandDetailComponent } from './management-land-detail.component';

describe('ManagementLandDetailComponent', () => {
  let component: ManagementLandDetailComponent;
  let fixture: ComponentFixture<ManagementLandDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementLandDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementLandDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
