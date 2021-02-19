import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePromosComponent } from './liste-promos.component';

describe('ListePromosComponent', () => {
  let component: ListePromosComponent;
  let fixture: ComponentFixture<ListePromosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListePromosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
