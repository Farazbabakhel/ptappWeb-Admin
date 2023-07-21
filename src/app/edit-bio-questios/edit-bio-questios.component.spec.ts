import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBioQuestiosComponent } from './edit-bio-questios.component';

describe('EditBioQuestiosComponent', () => {
  let component: EditBioQuestiosComponent;
  let fixture: ComponentFixture<EditBioQuestiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditBioQuestiosComponent]
    });
    fixture = TestBed.createComponent(EditBioQuestiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
