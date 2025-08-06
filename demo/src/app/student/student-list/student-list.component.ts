import {Component, EventEmitter, Output} from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'student-student-list',
  standalone: false,
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
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

  onStudentAdded(student: Student | null) {
    if (student) {
      this.students.push(student);
    }
  }

  onDeleteStudent(student: Student) {
    this.students = this.students.filter(s => s.id !== student.id);
  }


}
