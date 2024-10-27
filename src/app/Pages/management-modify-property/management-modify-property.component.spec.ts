import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementModifyPropertyComponent } from './management-modify-property.component';

describe('ManagementModifyPropertyComponent', () => {
  let component: ManagementModifyPropertyComponent;
  let fixture: ComponentFixture<ManagementModifyPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementModifyPropertyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementModifyPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
