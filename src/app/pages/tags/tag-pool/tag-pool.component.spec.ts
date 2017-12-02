import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagPoolComponent } from './tag-pool.component';

describe('TagPoolComponent', () => {
  let component: TagPoolComponent;
  let fixture: ComponentFixture<TagPoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagPoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagPoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
