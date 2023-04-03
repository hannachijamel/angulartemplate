import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListconditionnelComponent } from './listconditionnel.component';

describe('ListconditionnelComponent', () => {
  let component: ListconditionnelComponent;
  let fixture: ComponentFixture<ListconditionnelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListconditionnelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListconditionnelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
