import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandsListComponent } from './lands-list.component';

describe('LandsListComponent', () => {
  let component: LandsListComponent;
  let fixture: ComponentFixture<LandsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LandsListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LandsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
