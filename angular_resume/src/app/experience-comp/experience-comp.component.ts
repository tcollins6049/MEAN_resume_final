import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience-comp.component.html',
  styleUrls: ['./experience-comp.component.css']
})
export class ExperienceComponent implements OnInit {
  exper: any[] = [];
  vols: any[] = [];

  data: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/experience').subscribe(
      (response: any[]) => {
        if (response[0] !== undefined) {
          this.exper = response[0];
        }
        if (response[1] !== undefined) {
          this.vols = response[1];
        }
        console.log('Response data:', response); // Log the fetched user data
        console.log('Experience data:', this.exper);
        console.log('Volunteer data:', this.vols);
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  isListNotEmpty(list: any[]): boolean {
    return list && list.length > 0;
  }
}
