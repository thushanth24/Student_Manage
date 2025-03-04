import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

interface FormData {
  [key: string]: string | File | null; // ✅ Allow dynamic indexing
  fullName: string;
  nic: string;
  dob: string;
  address: string;
  course: string;
  drivingLicense: string;
  department: string;
  seaService: string;
  company: string;
  nicFile: File | null;
  passportFile: File | null;
  photoFile: File | null;
}

@Component({
  selector: 'app-student-registration',
  standalone: true,
  imports: [CommonModule, FormsModule, ButtonModule, InputTextModule],
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.scss']
})
export class StudentRegistrationComponent {
  step = 0; // Track current step

  formData: FormData = {
    fullName: '',
    nic: '',
    dob: '',
    address: '',
    course: '',
    drivingLicense: '',
    department: '',
    seaService: '',
    company: '',
    nicFile: null,
    passportFile: null,
    photoFile: null
  };

  constructor(private router: Router) {}

  nextStep() {
    if (this.step < 3) {
      this.step++;
    }
  }

  previousStep() {
    if (this.step > 0) {
      this.step--;
    }
  }

  onFileSelect(event: any, field: keyof FormData) {
    const file = event.target.files[0];
    this.formData[field] = file;
  }

  submitForm() {
    console.log("Form Submitted:", this.formData);
    alert("Registration Completed Successfully!");
    this.router.navigate(['/']); // Redirect after completion
  }
}
