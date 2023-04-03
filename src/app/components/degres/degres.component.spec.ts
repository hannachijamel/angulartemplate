import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DegresComponent } from './degres.component';

describe('DegresComponent', () => {
  let component: DegresComponent;
  let fixture: ComponentFixture<DegresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DegresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DegresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
