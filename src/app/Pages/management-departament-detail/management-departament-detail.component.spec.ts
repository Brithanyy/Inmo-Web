import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementDepartamentDetailComponent } from './management-departament-detail.component';

describe('ManagementDepartamentDetailComponent', () => {
  let component: ManagementDepartamentDetailComponent;
  let fixture: ComponentFixture<ManagementDepartamentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementDepartamentDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementDepartamentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
