import { Component, EventEmitter, Inject, Output, signal } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'student-student-form',
  standalone: false,
  templateUrl: './student-form.component.html',
  styleUrl: './student-form.component.css'
})
export class StudentFormComponent {
  student: Student = {name:"", grade:0}
  @Output() studentAdded = new EventEmitter<Student>();

  message: string | null = null;

  constructor( @Inject(StudentService) private studentService: StudentService) { }



  addStudent() {
    console.log("Adding student:", this.student);
    this.studentService.addStudent(this.student).subscribe({
      next: (student: Student) => {
        this.student = {name: "", grade: 0}; // Reset form
        this.studentAdded.emit(student); // Emit the added student
        this.message = `Student ${student.id} added successfully!`;
      },
      error: (err: Error) => {
        this.message = "Error adding student: " + err.message;
      }
    });
  }
}
