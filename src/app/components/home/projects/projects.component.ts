import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from 'src/app/models/Project';
import { ProjectsService } from 'src/app/services/projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projectList: Project[] = [];

  constructor(private router: Router, private projectService: ProjectsService) {

  }

  ngOnInit() {
    this.projectService.findAllProjects().subscribe((projectList: Project[]) => {
      this.projectList = projectList;
    });
  }

  redirectRegister(projectId: number): void {
    this.router.navigate(['home/form-project'], { skipLocationChange: true, state: { id: projectId } });
  }
}
