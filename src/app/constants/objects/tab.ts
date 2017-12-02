export class Tab {
  id: string;
  title: string;
  route: string;

  constructor(id: string, title: string, route: string) {
    this.id = id;
    this.title = title;
    this.route = route;
  }
}
