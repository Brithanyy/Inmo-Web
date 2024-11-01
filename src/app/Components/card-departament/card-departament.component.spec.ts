import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDepartamentComponent } from './card-departament.component';

describe('CardDepartamentComponent', () => {
  let component: CardDepartamentComponent;
  let fixture: ComponentFixture<CardDepartamentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDepartamentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDepartamentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
