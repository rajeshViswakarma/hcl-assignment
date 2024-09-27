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

  student: Student | undefined;

  constructor(
    private route: ActivatedRoute,
    private studentService: StudentService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('Id')!;
    this.studentService.getStudentRecord().subscribe(data => {
      this.student = data.find(student => student.Id === id);
    });
  }
}