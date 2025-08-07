import { Routes } from '@angular/router';
import {StudentListComponent} from './student/student-list/student-list.component';
import {StudentFormComponent} from './student/student-form/student-form.component';

export const routes: Routes = [
  {
    path: 'students',
    component: StudentListComponent,
  },
  {
    path: 'students/new',
    component: StudentFormComponent
  }
];
