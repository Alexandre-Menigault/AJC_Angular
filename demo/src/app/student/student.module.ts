import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { StudentFormComponent } from './student-form/student-form.component';
import { FormsModule } from '@angular/forms';
import { MessageComponent } from './message/message.component';



@NgModule({
  declarations: [
    StudentListComponent,
    StudentCardComponent,
    StudentFormComponent,
    MessageComponent
  ],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    StudentListComponent, StudentFormComponent,
  ]
})
export class StudentModule { }
