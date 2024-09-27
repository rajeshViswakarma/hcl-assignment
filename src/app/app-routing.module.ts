import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Satandard1Component } from './student/satandard1/satandard1.component';
import { Satandard2Component } from './student/satandard2/satandard2.component';
import { Satandard3Component } from './student/satandard3/satandard3.component';
import { StudentDetailsComponent } from './student/student-details/student-details.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'satandard1', component: Satandard1Component },
  { path: 'satandard2', component: Satandard2Component },
  { path: 'satandard3', component: Satandard3Component },  
  { path: 'student-view-record', component: StudentDetailsComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
