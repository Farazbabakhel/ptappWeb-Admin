import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBioQuestiosComponent } from './add-bio-questios.component';

describe('AddBioQuestiosComponent', () => {
  let component: AddBioQuestiosComponent;
  let fixture: ComponentFixture<AddBioQuestiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddBioQuestiosComponent]
    });
    fixture = TestBed.createComponent(AddBioQuestiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
