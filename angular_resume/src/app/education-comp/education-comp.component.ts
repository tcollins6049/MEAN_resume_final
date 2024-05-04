import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education-comp.component.html',
  styleUrls: ['./education-comp.component.css']
})
export class EducationComponent implements OnInit {
  edu: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/education').subscribe(
      (data: any[]) => {
        this.edu = data;
        console.log('Education data:', this.edu); // Log the fetched user data
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
}
