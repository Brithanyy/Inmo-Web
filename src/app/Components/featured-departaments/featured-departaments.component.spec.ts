import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedDepartamentsComponent } from './featured-departaments.component';

describe('FeaturedDepartamentsComponent', () => {
  let component: FeaturedDepartamentsComponent;
  let fixture: ComponentFixture<FeaturedDepartamentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FeaturedDepartamentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeaturedDepartamentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
