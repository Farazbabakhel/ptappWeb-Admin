import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBioQuestiosComponent } from './list-bio-questios.component';

describe('ListBioQuestiosComponent', () => {
  let component: ListBioQuestiosComponent;
  let fixture: ComponentFixture<ListBioQuestiosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListBioQuestiosComponent]
    });
    fixture = TestBed.createComponent(ListBioQuestiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
