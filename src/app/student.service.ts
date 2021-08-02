import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  url='https://localhost:44374/api/studentsv2';
  constructor(private http: HttpClient) { }

  GetAllStudent(): Observable<Student[]> {
    const data=this.http.get<Student[]>(this.url+"/GetStudents");
    console.log(data);
    return this.http.get<Student[]>(this.url+"/GetStudents");
  }

  GetStudentById(id: number): Observable<Student> {
    return this.http.get<Student>(this.url+"/GetStudent/"+id);
  }
}
