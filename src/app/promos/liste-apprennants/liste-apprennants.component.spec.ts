import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeApprennantsComponent } from './liste-apprennants.component';

describe('ListeApprennantsComponent', () => {
  let component: ListeApprennantsComponent;
  let fixture: ComponentFixture<ListeApprennantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeApprennantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeApprennantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
