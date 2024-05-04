import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience-comp.component.html',
  styleUrls: ['./experience-comp.component.css']
})
export class ExperienceComponent implements OnInit {
  exper: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/experience').subscribe(
      (data: any[]) => {
        this.exper = data;
        console.log('Experience data:', this.exper); // Log the fetched user data
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }
}
