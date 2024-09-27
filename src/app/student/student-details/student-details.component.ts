import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  Istudent: Student | undefined;

  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      const id = +param['id'];
      console.log(`Fetching details for student ID: ${id}`);
      
      this.Istudent = this.studentService.getStudent(id);
      
      if (!this.Istudent) {
        console.warn(`Student with ID ${id} not found`);
      } else {
        console.log('Fetched student details:', this.Istudent);
      }
    });
  }
}