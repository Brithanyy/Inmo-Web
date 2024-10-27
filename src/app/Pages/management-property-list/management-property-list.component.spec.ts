import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagementPropertyListComponent } from './management-property-list.component';

describe('ManagementPropertyListComponent', () => {
  let component: ManagementPropertyListComponent;
  let fixture: ComponentFixture<ManagementPropertyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagementPropertyListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManagementPropertyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
