import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLandsComponent } from './list-lands.component';

describe('ListLandsComponent', () => {
  let component: ListLandsComponent;
  let fixture: ComponentFixture<ListLandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListLandsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListLandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
