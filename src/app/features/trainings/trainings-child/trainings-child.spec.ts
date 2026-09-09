import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingsChild } from './trainings-child';

describe('TrainingsChild', () => {
  let component: TrainingsChild;
  let fixture: ComponentFixture<TrainingsChild>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingsChild]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingsChild);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
