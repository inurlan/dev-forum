import {Tab} from './tab';

export class NavTab {
  id: string;
  title: string;
  tabs: Tab[];
  selected: number;

  constructor(id: string, title: string, tabs: Tab[], selected: number) {
    this.id = id;
    this.title = title;
    this.tabs = tabs;
    this.selected = selected;
  }
}
