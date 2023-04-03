import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParametragePrevConditionnelComponent } from './parametrage-prev-conditionnel.component';

describe('ParametragePrevConditionnelComponent', () => {
  let component: ParametragePrevConditionnelComponent;
  let fixture: ComponentFixture<ParametragePrevConditionnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParametragePrevConditionnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParametragePrevConditionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
