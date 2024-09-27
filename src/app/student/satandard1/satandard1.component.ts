import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import {Student} from '../student'
import { Router } from '@angular/router';
@Component({
  selector: 'app-satandard1',
  templateUrl: './satandard1.component.html',
  styleUrls: ['./satandard1.component.css']
})
export class Satandard1Component implements OnInit {


  public studentArr: Student[] = []; 

  constructor(private _SService: StudentService,private router: Router) { }

  ngOnInit(): void {
    this.fetchStudentRecords();
  }

  private fetchStudentRecords(): void {
    this._SService.getStudentRecord().subscribe({
      next:  (data: Student[]) => {
        this.studentArr = data;
      },
      error: () => {console.error('Error: Unable to fetching student records');}     
    });
  }
  viewDetails(id: number): void {
    this.router.navigate(['student-view-record', id]);
  }
}