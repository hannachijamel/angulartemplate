import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipementorganeComponent } from './equipementorgane.component';

describe('EquipementorganeComponent', () => {
  let component: EquipementorganeComponent;
  let fixture: ComponentFixture<EquipementorganeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EquipementorganeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipementorganeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
