import { ElementInputBase } from './element-input-base';

export class ElementInputText extends ElementInputBase<string> {
  controlType = 'textbox';
  type = 'string';

  constructor(options: {} = {}) {
    super(options);
    this.type = options['type'];
  }
}
