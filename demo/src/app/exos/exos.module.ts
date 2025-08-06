import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToggleBtnComponent } from './toggle-btn/toggle-btn.component';
import { QuoteComponent } from './quote/quote.component';
import { CityChoiceComponent } from './city-choice/city-choice.component';
import { CityCardComponent } from './city-card/city-card.component';
import { PasswordComponent } from './password/password.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    ToggleBtnComponent, QuoteComponent, CityChoiceComponent, CityCardComponent, PasswordComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [ToggleBtnComponent, QuoteComponent, CityChoiceComponent, PasswordComponent, PasswordComponent]
})
export class ExosModule { }
