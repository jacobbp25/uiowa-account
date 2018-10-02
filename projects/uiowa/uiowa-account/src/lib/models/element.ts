export class Element {
  display: string;
  size: number;
  webApiProperty: string;
  isRequired: boolean;

  constructor(
    display: string,
    size: number = 0,
    webapiproperty: string = null,
    isRequired: boolean
  ) {
    this.display = display;
    this.size = size;
    this.webApiProperty = webapiproperty;
    this.isRequired = isRequired;
  }
}
