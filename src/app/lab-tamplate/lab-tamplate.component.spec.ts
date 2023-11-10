import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabTamplateComponent } from './lab-tamplate.component';

describe('LabTamplateComponent', () => {
  let component: LabTamplateComponent;
  let fixture: ComponentFixture<LabTamplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabTamplateComponent]
    });
    fixture = TestBed.createComponent(LabTamplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
