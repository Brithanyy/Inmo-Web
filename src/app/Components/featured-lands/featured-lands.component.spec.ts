import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedLandsComponent } from './featured-lands.component';

describe('FeaturedLandsComponent', () => {
  let component: FeaturedLandsComponent;
  let fixture: ComponentFixture<FeaturedLandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedLandsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedLandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
