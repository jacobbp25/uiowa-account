import { Component, OnInit, Input } from '@angular/core';
import { Account, FieldOption, ElementInputBase, ElementInputText, ElementInputHidden } from '../models';
import { FormGroup } from '@angular/forms';
import { InputControlService } from '../input-control.service';

@Component({
  selector: 'uiowa-account-input',
  templateUrl: './account-input.component.html',
  styleUrls: ['./account-input.component.css'],
  providers: [InputControlService]
})
export class AccountInputComponent implements OnInit {
  @Input()
  account: Account;
  @Input()
  options?: FieldOption[] = [];
  @Input()
  index?: number = 0;

  //output = [];
  questions: ElementInputBase<any>[] = [];
  form: FormGroup;

  constructor(private ics: InputControlService) {}

  ngOnInit() {
    this.account.elements.forEach((element, loopIndex) => {
      if (this.options.find(x => x.name === element.webApiProperty)) {
        let hiddenOption = this.options.find(x => x.name === element.webApiProperty);
        this.questions.push(
          new ElementInputHidden({
            value: hiddenOption.defaultValue,
            label: element.display,
            key: element.webApiProperty + '_' + this.index,
            size: element.size,
            display: hiddenOption.display
          })
        );
      } else {
        this.questions.push(
          new ElementInputText({
            value: this.account.getElementString(loopIndex),
            label: element.display,
            key: element.webApiProperty + '_' + this.index,
            size: element.size,
            name: element.webApiProperty,
            id: element.webApiProperty + '_' + this.index
          })
        );
      }
    });

    this.form = this.ics.toFormGroup(this.questions);
  }

  // paste(e: ClipboardEvent) {
  //   const pastedInput: string = e.clipboardData.getData('text/plain').replace(/\D/g, ''); // get a digit-only string
  //   e.preventDefault();
  //   if (!pastedInput) {
  //     return;
  //   }
  //   if (pastedInput.length < 40) {
  //     document.execCommand('insertText', false, pastedInput);
  //   } else {
  //     this.account.parseString(pastedInput);
  //   }
  //   this.mfkChange.emit(this.mfk);
  // }

  // onKeyup(e: KeyboardEvent) {
  //   //this.mfkChange.emit(this.mfk);
  //   if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
  //     return; // only numbers can trigger auto jump feature.
  //   }
  //   const currentInputFieldName = e.target['name'];
  //   if (this.account[currentInputFieldName].length === e.target['maxLength']) {
  //     // auto jump to next input field when current field is full
  //     const currentInputFieldIndex = this.options.findIndex(o => o.name === currentInputFieldName);
  //     for (let i = currentInputFieldIndex + 1; i < this.options.length; i++) {
  //       // if (this.options[i].readonly) {
  //       //   continue;
  //       // }
  //       const nextInputField = this.mfkInputFields.find(v => v.el.nativeElement['name'] === this.options[i].name);
  //       nextInputField.el.nativeElement.focus();
  //       break;
  //     }
  //   }
  // }

  onKeydown(e: KeyboardEvent) {
    // handle "tab" key --> auto fill '0's if the input field has not completed
    if (e.keyCode !== 9) {
      return;
    }
    if (e.target['readOnly']) {
      return;
    }
    const maxlength = e.target['maxLength'];
    while (this.account[e.target['name']].length < maxlength) {
      this.account[e.target['name']] = this.account[e.target['name']].concat('0');
    }
  }
}
