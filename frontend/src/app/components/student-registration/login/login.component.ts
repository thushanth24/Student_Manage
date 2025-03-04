import { Component , EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

@Component({
  selector: 'app-student-login',
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class StudentLoginComponent {
  studentId: string = '';

  constructor(private router: Router) {}

  onLogin() {
    if (this.studentId.trim()) {
      this.createProfile.emit(); // ✅ Emit event when clicking "Log In"
      this.router.navigate(['/create-profile']); // ✅ Use correct route
    } else {
      alert('Please enter a valid NIC or Passport number');
    }
  }

  @Output() back = new EventEmitter<void>(); // ✅ Declare event emitter
  @Output() createProfile = new EventEmitter<void>();


  goBack() {
    this.back.emit(); // ✅ Emit event when back button is clicked
    this.router.navigate(['/student-manage']); // ✅ Use correct route

  }

  onCreateProfile() {
    this.createProfile.emit(); // ✅ Emit event when clicking "Create Profile"
  }
}










