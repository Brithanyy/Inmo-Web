import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementModifyDepartamentComponent } from './management-modify-departament.component';

describe('ManagementModifyDepartamentComponent', () => {
  let component: ManagementModifyDepartamentComponent;
  let fixture: ComponentFixture<ManagementModifyDepartamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementModifyDepartamentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementModifyDepartamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
