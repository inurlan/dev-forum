import {Tab} from './tab';

export class NavTab {
  id: string;
  title: string;
  tabs: Tab[];
  selected: number;


  /**
   * constructor Creates NavTab object which stands for
   * navigation tab and holds multiple subtabs within.
   * @param id This is object id.
   * @param title Specifies the object title.
   * @param tabs Holds list of tabs which parent NavTab should view.
   * @param selected Idex of tab that should be selected by default.
   */
  constructor(id: string, title: string, tabs: Tab[], selected: number) {
    this.id = id;
    this.title = title;
    this.tabs = tabs;
    this.selected = selected;
  }
}
