import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { ElementInputBase } from './models/element-input-base';

@Injectable()
export class InputControlService {
  constructor() {}

  toFormGroup(questions: ElementInputBase<any>[]) {
    const group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required
        ? new FormControl(question.value || '', Validators.required)
        : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
