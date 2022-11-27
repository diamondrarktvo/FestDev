import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSensibilisationComponent } from './edit-sensibilisation.component';

describe('EditSensibilisationComponent', () => {
  let component: EditSensibilisationComponent;
  let fixture: ComponentFixture<EditSensibilisationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditSensibilisationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditSensibilisationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
