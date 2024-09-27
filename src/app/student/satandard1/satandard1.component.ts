import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import {Student} from '../student'
@Component({
  selector: 'app-satandard1',
  templateUrl: './satandard1.component.html',
  styleUrls: ['./satandard1.component.css']
})
export class Satandard1Component implements OnInit {


  public studentArr: Student[] = []; 

  constructor(private _SService: StudentService) { }

  ngOnInit() {
    this._SService.getStudentRecord().subscribe(
      (data: Student[]) => {
        this.studentArr = data;
      },
      error => {
        console.error('Error fetching student records', error);
      }
    );
  }
}