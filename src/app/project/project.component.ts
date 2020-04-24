import {Component, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//import {ProjectListComponent} from './../project-list/project-list.component';
import {ProjectsService} from './../projects.service';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {
    project;
    constructor(
        private route: ActivatedRoute,
        private projectsService: ProjectsService
    ){
        
    }

    ngOnInit(){
        this.route.paramMap.subscribe((params) => {
            this.projectsService.getProjectList().subscribe(res => {this.project = res[+params.get('projectId')];});
        });
    }
}