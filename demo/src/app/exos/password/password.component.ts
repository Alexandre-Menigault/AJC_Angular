import {Component, Inject} from '@angular/core';
import {PasswordService} from '../password.service';

@Component({
  selector: 'exos-password',
  standalone: false,
  templateUrl: './password.component.html',
  styleUrl: './password.component.css'
})
export class PasswordComponent {

  passwordLength: number = 6
  hasNumbers: boolean = false
  hasSpecialChars: boolean = false

  sendToAPI: boolean = false

  password: string | null = null

  constructor(private passwordService: PasswordService) {
  }

  generatePassword() {
    const password = this.passwordService.generatePassword(this.passwordLength, this.hasNumbers, this.hasSpecialChars)

    if(this.sendToAPI) {
      this.passwordService.sendPassword(password).subscribe({
        next: (password) => {
          console.log(password)
          this.password = password.password
        },
        error: (err) => {
          console.error("Error on password send", err.message())
        }
      })
    } else {
      this.password = password
    }
  }


}
