import {Component, EventEmitter, Input, Output} from '@angular/core';
import { Student } from '../student';
import {StudentService} from '../student.service';

@Component({
  selector: 'student-student-card',
  standalone: false,
  templateUrl: './student-card.component.html',
  styleUrl: './student-card.component.css'
})
export class StudentCardComponent {
  @Input({required: true}) student!: Student;
  @Input("isGradeVisible") isGradeVisible: boolean = false;

  @Output() studentDeleted = new EventEmitter<Student>();

  constructor(private service: StudentService) {
  }

  deleteStudent() {
    this.service.deleteStudent(this.student).subscribe({
      next: () => {
        this.studentDeleted.emit(this.student);
      },
      error: (err: Error) => {
        console.error("Error deleting student: ", err.message + "")
      }
    });
  }

}
