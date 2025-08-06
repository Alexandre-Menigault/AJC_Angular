import { Injectable } from '@angular/core';
import { Student } from './student';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Student[]> {
    try {
      return this.http.get<Student[]>("http://localhost:3000/students")
    } catch(e) {
      throw new Error("Unable to fetch data")
    }
  }
}
