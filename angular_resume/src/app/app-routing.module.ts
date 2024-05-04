import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience-comp/experience-comp.component';
import { EducationComponent } from './education-comp/education-comp.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'experience', component: ExperienceComponent },
    { path: 'education', component: EducationComponent },
    { path: 'projects', component: ProjectsComponent }
    // add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
