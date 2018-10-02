export class Element {
  Display: string;
  Size: number;
  WebApiProperty: string;
  IsRequired: boolean;

  constructor(
    display: string,
    size: number = 0,
    webapiproperty: string = null,
    isRequired: boolean
  ) {
    this.Display = display;
    this.Size = size;
    this.WebApiProperty = webapiproperty;
    this.IsRequired = isRequired;
  }
}
