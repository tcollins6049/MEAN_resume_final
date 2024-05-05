import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  projectId: string = ''; // Ensure that projectId is correctly set
  project: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.projectId = params['id'];
      console.log('Project ID:', this.projectId); // Check if projectId is correct
      this.getProjectDetails(this.projectId);
    });
  }

  getProjectDetails(projectId: string) {
    this.http.get<any>(`http://localhost:3000/projects/${projectId}`)
      .pipe(
        catchError(error => {
          console.error('Error fetching project details:', error);
          return throwError(error);
        })
      )
      .subscribe(
        (data: any) => {
          this.project = data;
          console.log('Fetched project details:', this.project); // Log fetched project details
        }
      );
  }
}



