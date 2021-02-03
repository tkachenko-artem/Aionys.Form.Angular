import { NgModule } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';

const materialModules = [
  MatButtonModule,
  MatSelectModule,
  MatFormFieldModule,
  MatAutocompleteModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
];

const components = [InputComponent, SelectComponent];

const sharedModules = [CommonModule, FormsModule, ReactiveFormsModule];
@NgModule({
  imports: [...materialModules, ...sharedModules],
  declarations: [...components],
  exports: [...materialModules, ...sharedModules, ...components],
  providers: [MatNativeDateModule],
})
export class SharedModule {}
