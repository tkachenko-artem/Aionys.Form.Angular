import { Component, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { AbstractFormFieldComponent } from '../abstract-form-field.component';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class InputComponent extends AbstractFormFieldComponent {
  @Input() isDatepicker = false;
  constructor() {
    super();
  }
}
