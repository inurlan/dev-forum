import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {MediaListComponent} from './media-list.component';

describe('MediaListComponent', () => {
  let component: MediaListComponent;
  let fixture: ComponentFixture<MediaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MediaListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // this is basic test for checking component creation
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // this test should pass
  it('should contain social media information for icons that are active', () => {
    const result = component.icons;
    expect(result).toContain({selector: 'facebook', url: 'https://facebook.com', active: true});
    expect(result).toContain({selector: 'google-plus', url: 'https://gmail.com', active: true});
    expect(result).toContain({selector: 'github', url: 'https://github.com', active: true});
  });

  // this test should fail because it is expected to have at least one inactive social media icon
  it('should contain social media information for icons that are both active and inactive', () => {
    const result = component.icons;
    expect(result).toContain({selector: 'facebook', url: 'https://facebook.com', active: true});
    expect(result).toContain({selector: 'google-plus', url: 'https://gmail.com', active: false});
    expect(result).toContain({selector: 'github', url: 'https://github.com', active: true});
  });

  // this test should pass
  it('social media urls should start from https://', () => {
    const result = component.icons;
    expect(result[0].url).toContain('https://');
  });

  // this test should fail as it is expected to have http:// as well
  it('social media urls should start from https:// and http://', () => {
    const result = component.icons;
    expect(result[0].url).toContain('http://');
  });

});
