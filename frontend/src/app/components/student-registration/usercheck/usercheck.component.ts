import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-profile',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './usercheck.component.html',
  styleUrls: ['./usercheck.component.scss']
})
export class CreateProfileComponent {
  @Output() back = new EventEmitter<void>();
  constructor(private router: Router) {}

  goBack() {
    this.back.emit();
    this.router.navigate(['/login']); // ✅ Use correct route

  }

  navform() {
    this.router.navigate(['/registration-form']);
  }
}
