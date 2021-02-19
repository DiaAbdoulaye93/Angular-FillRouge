import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateGrpcompetencesComponent } from './update-grpcompetences.component';

describe('UpdateGrpcompetencesComponent', () => {
  let component: UpdateGrpcompetencesComponent;
  let fixture: ComponentFixture<UpdateGrpcompetencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateGrpcompetencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateGrpcompetencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
