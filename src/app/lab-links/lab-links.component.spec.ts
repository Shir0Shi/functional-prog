import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabLinksComponent } from './lab-links.component';

describe('LabLinksComponent', () => {
  let component: LabLinksComponent;
  let fixture: ComponentFixture<LabLinksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabLinksComponent]
    });
    fixture = TestBed.createComponent(LabLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
