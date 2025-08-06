import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Password} from './password/password';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {
  constructor(private http: HttpClient) {
  }

  private letters: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  private numbers: string = '0123456789'
  private specialChars =  '&%+_@#$!?'

  generatePassword(length: number, hasNumbers: boolean, hasSpecialChars: boolean): string {
    let chars = this.letters;
    if (hasNumbers) chars += this.numbers;
    if (hasSpecialChars) chars += this.specialChars;

    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
    return password;
  }

  sendPassword(password: string): Observable<Password> {
    return this.http.post<Password>('http://localhost:3000/passwords', {password});
  }

}
