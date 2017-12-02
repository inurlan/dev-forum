import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlePoolComponent } from './article-pool.component';

describe('ArticlePoolComponent', () => {
  let component: ArticlePoolComponent;
  let fixture: ComponentFixture<ArticlePoolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlePoolComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlePoolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
