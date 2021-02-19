import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGrpcompetencesComponent } from './add-grpcompetences.component';

describe('AddGrpcompetencesComponent', () => {
  let component: AddGrpcompetencesComponent;
  let fixture: ComponentFixture<AddGrpcompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGrpcompetencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGrpcompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
