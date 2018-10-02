import { Element } from './element';

export class Account {
  Value: string;
  Delimiter: string;
  Elements: Element[];
  DefaultString: string;

  private valueAry: string[];

  constructor(
    value: string = null,
    delimiter: string = '-',
    elements: Element[] = null,
    defaultString: string = 'X'
  ) {
    this.Elements = elements;
    this.Value = value;
    this.Delimiter = delimiter;
    this.valueAry = this.Value.split(this.Delimiter);
    this.DefaultString = defaultString;
  }

  getElementString(index: number): string {
    let value = this.valueAry[index];
    if (!value) {
      const element = this.Elements[index];
      if (element.IsRequired) {
        for (let i = 1; i <= element.Size; i++) {
          value = value + this.DefaultString;
        }
      }
    }
    return value;
  }

  getElement(index: number): Element {
    return;
  }

  showDelimeter(index: number): boolean {
    if (this.lastElementIsOptionalAndEmpty(index)) {
      return false;
    }
    if (!this.indexIsTheLastElement(index)) {
      return true;
    }
    return false;
  }
  private indexIsTheLastElement(index: number): boolean {
    return index === this.Elements.length - 1;
  }

  private lastElementIsOptionalAndEmpty(index: number): boolean {
    if (index + 2 === this.Elements.length) {
      if (!this.Elements[index + 1].IsRequired && !this.valueAry[index + 1]) {
        return true;
      }
    }
    return false;
  }
}
