import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevenitiveperiodiqueComponent } from './prevenitiveperiodique.component';

describe('PrevenitiveperiodiqueComponent', () => {
  let component: PrevenitiveperiodiqueComponent;
  let fixture: ComponentFixture<PrevenitiveperiodiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrevenitiveperiodiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevenitiveperiodiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
