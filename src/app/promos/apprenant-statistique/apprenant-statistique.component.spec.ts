import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApprenantStatistiqueComponent } from './apprenant-statistique.component';

describe('ApprenantStatistiqueComponent', () => {
  let component: ApprenantStatistiqueComponent;
  let fixture: ComponentFixture<ApprenantStatistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApprenantStatistiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ApprenantStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
