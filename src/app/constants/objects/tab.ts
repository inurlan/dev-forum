export class Tab {
  id: string;
  title: string;
  route: string;

  /**
   * constructor Creates Tab object
   * @param id This is object id.
   * @param title Specifies the object title.
   * @param route Holds the route to page where it should navigate
   */
  constructor(id: string, title: string, route: string) {
    this.id = id;
    this.title = title;
    this.route = route;
  }
}
