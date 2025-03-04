import { Component } from '@angular/core';
import { StudentManageComponent } from "./components/student-manage/student-manage.component";
import { StudentLoginComponent } from "./components/student-registration/login/login.component";
import { CommonModule } from '@angular/common';
import { CreateProfileComponent } from "./components/student-registration/usercheck/usercheck.component";
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [ButtonModule, StudentManageComponent, StudentLoginComponent, CommonModule, CreateProfileComponent ,RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  showStudentLogin = false;
  showCreateProfile = false;


  showStudentRegistration() {
    this.showStudentLogin = true; // ✅ Hide sidebar & navbar, show only login form
  }

  hideStudentRegistration() {
    this.showStudentLogin = false; // ✅ Show everything again
  }

  showCreateProfileScreen() {
    this.showStudentLogin = false;
    this.showCreateProfile = true;
  }
}

