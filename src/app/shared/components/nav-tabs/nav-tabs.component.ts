import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Tab} from '../../../constants/objects/tab';

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.scss']
})
export class NavTabsComponent implements OnInit {

  @Input() title: string; // title of page
  @Input() tabs: Tab[]; // an array of {name: "", route: ""} objects
  @Input() selected: number; // index of default selected tab

  currentTab: string;
  url: string;

  constructor(private router: Router) {
  }


  ngOnInit() {
    this.activeTab();
  }

  // function for marking tab as selected
  selectTab(tab: any, event: any) {
    this.currentTab = tab.title;
  }

  // defaultTab() {
  //   if (this.selected >= 0) {
  //     this.currentTab = this.tabs[this.selected].title;
  //   }
  // }

  // get active route of the tab from current url
  activeTab(): boolean {
    let $tabs: Tab[];
    this.router.events.subscribe((res) => {

      this.url = this.router.url.toString();

      $tabs = this.tabs.filter((tab) =>
        this.getChild(tab.route) === this.getChild(this.url)
      );

      if ($tabs.length > 0) {
        this.currentTab = $tabs[0].title;
        return true;
      }
      //this.defaultTab();
    });
    return false;
  }


  getChild(url: string): string {
    if (url) {
      const routes = url.split('/');
      //console.log(url);
      return routes[routes.length - 1];
    }
  }
}
