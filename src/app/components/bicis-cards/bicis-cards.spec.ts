import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BicisCards } from './bicis-cards';

describe('BicisCards', () => {
  let component: BicisCards;
  let fixture: ComponentFixture<BicisCards>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BicisCards],
    }).compileComponents();

    fixture = TestBed.createComponent(BicisCards);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
