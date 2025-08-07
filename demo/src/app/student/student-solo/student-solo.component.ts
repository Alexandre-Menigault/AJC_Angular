import { Component } from '@angular/core';
import {StudentService} from '../student.service';
import {ActivatedRoute} from '@angular/router';
import {Student} from '../student';

@Component({
  selector: 'app-student-solo',
  standalone: false,
  templateUrl: './student-solo.component.html',
  styleUrl: './student-solo.component.css'
})
export class StudentSoloComponent {

  id: number = 0;
  student!: Student;

  constructor(
    private studentService: StudentService,
    private activatedRoute: ActivatedRoute,
  ) {

    this.activatedRoute.params.subscribe(params => {
      this.id = params['id'];
    })

  }

  ngOnInit() {
    this.studentService.getStudentById(this.id).subscribe({
      next: (student) => {
        this.student = student;
      },
      error: (err: Error) => {
        console.error("Error on student list")
      }
    })
  }

}
