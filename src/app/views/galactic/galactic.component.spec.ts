import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalacticComponent } from './galactic.component';

describe('GalacticComponent', () => {
  let component: GalacticComponent;
  let fixture: ComponentFixture<GalacticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalacticComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GalacticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
