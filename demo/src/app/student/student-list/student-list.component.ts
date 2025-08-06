import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'student-student-list',
  standalone: false,
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {

  students: Student[] = []
  errorLabel: string | null = null

  constructor(private service: StudentService) {
    this.getstudents()
  }

  async getstudents() {
    try {
      const students = await this.service.getStudents()
      this.students = students
      this.errorLabel = null
    }
    catch(e) {
      this.students = []
      this.errorLabel = (e as Error).message
    }
  }
 
}
