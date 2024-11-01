import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedHousesComponent } from './featured-houses.component';

describe('FeaturedHousesComponent', () => {
  let component: FeaturedHousesComponent;
  let fixture: ComponentFixture<FeaturedHousesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedHousesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedHousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
