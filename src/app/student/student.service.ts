import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
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
  private _url:string = "https://jsonplaceholder.typicode.com/todos/";
  
  constructor(private http : HttpClient, private router: Router) { }

// Fetch the data from json api and store it
getStudentRecord(): Observable<Student[]> {
  return this.http.get<Student[]>(this._url).pipe(tap(data => this.students = data));
}

// Get student by ID
getStudent(id: number): Student | undefined {
  return this.students.find(val => val.id === id);
}
}
