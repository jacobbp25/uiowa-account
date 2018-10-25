import { ElementInputBase } from './element-input-base';

export class ElementInputHidden extends ElementInputBase<string> {
  controlType = 'hidden';
  type = 'string';
  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'];
  }
}
