import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailLandComponent } from './detail-land.component';

describe('DetailLandComponent', () => {
  let component: DetailLandComponent;
  let fixture: ComponentFixture<DetailLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailLandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
