import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventiveconditionelleComponent } from './preventiveconditionelle.component';

describe('PreventiveconditionelleComponent', () => {
  let component: PreventiveconditionelleComponent;
  let fixture: ComponentFixture<PreventiveconditionelleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreventiveconditionelleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventiveconditionelleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
