import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDepartamentComponent } from './detail-departament.component';

describe('DetailDepartamentComponent', () => {
  let component: DetailDepartamentComponent;
  let fixture: ComponentFixture<DetailDepartamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailDepartamentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailDepartamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
