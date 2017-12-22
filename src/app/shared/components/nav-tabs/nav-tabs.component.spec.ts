import {async, ComponentFixture, fakeAsync, TestBed, tick} from '@angular/core/testing';

import { NavTabsComponent } from './nav-tabs.component';
import {Router} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {routes} from '../../../modules/app-routing.module';
import {Location} from "@angular/common";

describe('NavTabsComponent', () => {
  let component: NavTabsComponent;
  let fixture: ComponentFixture<NavTabsComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [ NavTabsComponent]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(NavTabsComponent);
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    component = fixture.componentInstance;
    router.initialNavigation();
    fixture.detectChanges();
  });

  // this test should pass
  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // this test should pass
  it('should get last subroute of a url', () => {
    const result = component.getChild('https://inurlan.github.io/dev-forum/questions/recent');
    expect(result).toBe('recent');
  });

  // this test should fail because it should get not last but furst route
  it('should get parent route of a url', () => {
    const result = component.getChild('https://inurlan.github.io/dev-forum/questions/recent');
    expect(result).toBe('inurlan');
  });
});
