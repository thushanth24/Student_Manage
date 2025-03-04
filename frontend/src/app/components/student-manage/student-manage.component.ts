import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-student-manage',
  standalone: true,
  imports: [],
  templateUrl: './student-manage.component.html',
  styleUrl: './student-manage.component.scss'
})
export class StudentManageComponent {
  constructor(private router: Router) {}

  @Output() studentRegistration = new EventEmitter<void>();

  onStudentRegistrationClick() {
    this.router.navigate(['/login']);
  }
}
