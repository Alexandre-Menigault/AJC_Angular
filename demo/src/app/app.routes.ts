import { Routes } from '@angular/router';
import {StudentListComponent} from './student/student-list/student-list.component';
import {StudentFormComponent} from './student/student-form/student-form.component';
import {StudentSoloComponent} from './student/student-solo/student-solo.component';

export const routes: Routes = [
  {
    path: 'students',
    component: StudentListComponent,
  },
  {
    path: 'students/new',
    component: StudentFormComponent
  },
  {
    path: 'students/:id',
    component: StudentSoloComponent
  }
];
