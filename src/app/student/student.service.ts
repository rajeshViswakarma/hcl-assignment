import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

// Fetch the data from json api
  getStudentRecord() : Observable<Student[]>{
     return this.http.get<Student[]>(this._url);
  }

  // show details from record
  viewDetails(id: number): void {
    this.router.navigate(['/student-view-record', id]);
  }

}
