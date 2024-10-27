import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementAddPropertyComponent } from './management-add-property.component';

describe('ManagementAddPropertyComponent', () => {
  let component: ManagementAddPropertyComponent;
  let fixture: ComponentFixture<ManagementAddPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementAddPropertyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementAddPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
