import { Routes } from '@angular/router';
import { CreateProfileComponent } from './components/student-registration/usercheck/usercheck.component';
import { StudentLoginComponent } from './components/student-registration/login/login.component';
import { StudentManageComponent } from './components/student-manage/student-manage.component';
import { StudentRegistrationComponent } from './components/student-registration/registration-form/registration-form.component';
export const routes: Routes = [
    {path:'',redirectTo:'student-manage',pathMatch:'full'},
    { path: 'student-manage', component: StudentManageComponent },
  { path: 'login', component: StudentLoginComponent },
  { path: 'login', component: StudentLoginComponent },
  { path: 'create-profile', component: CreateProfileComponent }, 
  { path: 'registration-form', component: StudentRegistrationComponent }, 
  { path: '**', redirectTo: 'login' } // Redirect unknown paths
];
