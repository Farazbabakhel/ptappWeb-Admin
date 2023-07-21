import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBioOptionsComponent } from './list-bio-options.component';

describe('ListBioOptionsComponent', () => {
  let component: ListBioOptionsComponent;
  let fixture: ComponentFixture<ListBioOptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListBioOptionsComponent]
    });
    fixture = TestBed.createComponent(ListBioOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
