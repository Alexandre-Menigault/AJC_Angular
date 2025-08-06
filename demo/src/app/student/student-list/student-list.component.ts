import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'student-student-list',
  standalone: false,
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css',
})
export class StudentListComponent {
  students: Student[] = [];
  errorLabel: string | null = null;

  areAllGradesVisible: boolean = false

  constructor(private service: StudentService) {
    this.service.getStudents().subscribe({
      next: (students) => {
        this.students = students;
        this.errorLabel = null;
      },
      error: (err: Error) => {
        this.students = [];
        this.errorLabel = err.message;
      },
    });
  }

}
