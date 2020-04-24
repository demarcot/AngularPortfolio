import {Component, OnInit} from '@angular/core';

import {ProjectsService} from './../projects.service';

@Component({
    selector: 'app-project-list',
    templateUrl: './project-list.component.html',
    styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
    projects;

    constructor(
        private projectsService: ProjectsService
    ){
        this.projects = this.projectsService.getProjectList();
    }

    ngOnInit(){
        
    }
}