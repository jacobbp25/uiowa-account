import { Component, OnInit, Input, Output, EventEmitter, ViewChildren, ElementRef, QueryList, AfterViewInit } from '@angular/core';
import { Account, FieldOption, ElementInputBase, ElementInputText, ElementInputHidden } from '../models';
import { FormGroup } from '@angular/forms';
import { InputControlService } from '../input-control.service';
import { DigitOnlyDirective } from '@uiowa/digit-only';

@Component({
  selector: 'uiowa-account-input',
  templateUrl: './account-input.component.html',
  styleUrls: ['./account-input.component.css'],
  providers: [InputControlService]
})
export class AccountInputComponent implements OnInit, AfterViewInit {
  @Input()
  account: Account;
  @Input()
  options?: FieldOption[] = [];
  @Input()
  index = 0;

  @Output()
  accountChange = new EventEmitter<string>();

  @ViewChildren(DigitOnlyDirective)
  formInputs: QueryList<DigitOnlyDirective>;

  questions: ElementInputBase<any>[] = [];
  form: FormGroup;
  accountString: string;

  constructor(private inputControlService: InputControlService) {}

  ngOnInit() {
    this.account.elements.forEach((element, loopIndex) => {
      if (this.options.find(x => x.name === element.webApiProperty)) {
        const hiddenOption = this.options.find(x => x.name === element.webApiProperty);
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

    this.form = this.inputControlService.toFormGroup(this.questions);
    this.accountString = this.parse(this.questions, this.account.delimiter);
  }

  private parseAccount(): string {
    return this.parse(this.questions, this.account.delimiter);
  }

  private parse(questions: ElementInputBase<any>[], delimeter: string): string {
    let accountString = '';
    questions.forEach((x, index) => {
      accountString += x.value;
      if (this.account.showDelimeter(index, true)) {
        accountString += delimeter;
      }
    });
    return accountString;
  }

  ngAfterViewInit(): void {
    // console.log(this.formInputs);
  }

  onKeyup(e: KeyboardEvent) {
    this.accountChange.emit(this.parseAccount());
    if ((e.keyCode < 48 || e.keyCode > 57) && (e.keyCode < 96 || e.keyCode > 105)) {
      return; // only numbers can trigger auto jump feature.
    }
    const currentInputId = e.target['id'];
    if (this.form.controls[currentInputId].value.length === e.target['maxLength']) {
      const currentQuestionIndex = this.questions.findIndex(x => x.key === currentInputId);
      for (let i = currentQuestionIndex + 1; i < this.questions.length; i++) {
        if (this.questions[i].controlType === 'hidden') {
          continue;
        }
        const nextInput = this.questions[i];
        const nextInputField = this.formInputs.find(v => v.el.nativeElement['id'] === nextInput.key);
        nextInputField.el.nativeElement.focus();
        break;
      }
    }
  }

  onKeydown(e: KeyboardEvent) {
    if (e.keyCode !== 9) {
      return;
    }
    if (e.target['readOnly']) {
      return;
    }

    while (this.form.controls[e.target['id']].value.length < e.target['maxLength']) {
      this.form.controls[e.target['id']].patchValue(this.form.controls[e.target['id']].value.concat(0));
    }
  }
}

// const targetElement = e.target['id'].split('_')[0];
// const accountElement = this.account.elements.filter(x => x.webApiProperty === targetElement)[0];
//    console.log(accountElement);
//    console.log(targetElement);
// const question = this.questions.filter(x => x.key === e.target['id'])[0];
// console.log(question);
// question.value = 123;
// console.log(question);

// handle "tab" key --> auto fill '0's if the input field has not completed
