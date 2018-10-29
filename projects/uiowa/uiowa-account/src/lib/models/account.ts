import { Element } from './element';

export class Account {
  value: string;
  delimiter: string;
  elements: Element[];
  defaultString: string;

  private valueAry: string[];

  constructor(value: string = null, delimiter: string = '-', elements: Element[] = [], defaultString: string = 'X') {
    this.elements = elements;
    this.value = value;
    this.delimiter = delimiter;
    this.valueAry = this.value.split(this.delimiter);
    this.defaultString = defaultString;
  }

  getElementString(index: number): string {
    let value = this.valueAry[index];
    if (!value) {
      const element = this.elements[index];
      if (element.isRequired) {
        for (let i = 1; i <= element.size; i++) {
          value = value + this.defaultString;
        }
      }
    }
    return value;
  }

  showDelimeter(index: number, leaveOptionalEnd: boolean = false): boolean {
    if (this.lastElementIsOptionalAndEmpty(index) && !leaveOptionalEnd) {
      return false;
    }
    if (!this.indexIsTheLastElement(index)) {
      return true;
    }
    return false;
  }

  private indexIsTheLastElement(index: number): boolean {
    return index === this.elements.length - 1;
  }

  private lastElementIsOptionalAndEmpty(index: number): boolean {
    if (index + 2 === this.elements.length) {
      if (!this.elements[index + 1].isRequired && !this.valueAry[index + 1]) {
        return true;
      }
    }
    return false;
  }
}
