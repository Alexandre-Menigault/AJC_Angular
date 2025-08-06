import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor() { }

  async getStudents(): Promise<Student[]> {
    return fetch("http://localhost:3000/students")
      .then((data) => data.json())
      .then((students) => {
        return students
      })
      .catch(() => {
        throw new Error("Unable to fetch data")
      })
  }
}
