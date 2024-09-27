import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { Student } from './student';
import { Router } from '@angular/router';

const headerOption = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})

export class StudentService {
  students: Student[] = [];
  
// Api URL
private _url: string = "http://localhost:3000/Students"; 
  
  constructor(private http : HttpClient, private router: Router) { }

// Fetch the data from json api and store it
getStudentRecord(): Observable<Student[]> {
  return this.http.get<{ StandardId: number; Students: Student[] }[]>
  (this._url).pipe(
    map(standards => standards.flatMap(standard => standard.Students)), 
    tap(data => this.students = data)
  );
}

// Get student by ID
  getStudent(Id: number): Student | undefined {
    return this.students.find(val => val.Id === Id);
  }
}
