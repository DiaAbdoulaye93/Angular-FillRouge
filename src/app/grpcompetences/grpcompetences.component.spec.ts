import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrpcompetencesComponent } from './grpcompetences.component';

describe('GrpcompetencesComponent', () => {
  let component: GrpcompetencesComponent;
  let fixture: ComponentFixture<GrpcompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrpcompetencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrpcompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
