import {Component, OnInit} from '@angular/core';
import {NavTab} from './constants/objects/nav-tab';
import {Tab} from './constants/objects/tab';
import {Router} from '@angular/router';
import {NAV_TABS} from './constants/nav-tabs';
import {TABS} from './constants/tabs';
import {DEFAULT_ROUTE, PARENT_ROUTE} from './constants/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  nav_tabs: NavTab[];
  tabs: Tab[];
  url: string;

  constructor(private router: Router) {
    this.nav_tabs = NAV_TABS;
    this.tabs = TABS;
    //this.getRoute();
  }

  ngOnInit() {
    this.getRoute();
  }

  getRoute() {
    this.router.events.subscribe((res) => {
      this.url = this.router.url.toString();
    });
  }

  getParent(): string {
    if (this.url) {
      return this.url.split('/')[PARENT_ROUTE];
    }
  }

  getActiveRoute(route: string): string {
    if (this.getParent() === '') {
      return (route === DEFAULT_ROUTE) ? 'active' : '';
    } else if (route === this.getParent()) {
      return 'active';
    }
    return '';
  }
}
