import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementAddDepartamentComponent } from './management-add-departament.component';

describe('ManagementAddDepartamentComponent', () => {
  let component: ManagementAddDepartamentComponent;
  let fixture: ComponentFixture<ManagementAddDepartamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementAddDepartamentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementAddDepartamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
