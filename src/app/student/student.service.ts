import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

const headerOption = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})


export class StudentService {

  private _url:string = "https://jsonplaceholder.typicode.com/todos/";
  constructor(private http : HttpClient) { }

  getStudentRecord() : Observable<Student[]>{
     return this.http.get<Student[]>(this._url);
  }



}
