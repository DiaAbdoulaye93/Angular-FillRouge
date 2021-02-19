import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeReferentielsComponent } from './liste-referentiels.component';

describe('ListeReferentielsComponent', () => {
  let component: ListeReferentielsComponent;
  let fixture: ComponentFixture<ListeReferentielsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeReferentielsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeReferentielsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
