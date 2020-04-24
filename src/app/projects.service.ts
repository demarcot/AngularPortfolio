import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: "root"
})
export class ProjectsService {
    constructor(
        private http : HttpClient
    ){}

    getProjectList()
    {
        return this.http.get('/assets/projects.json');
    }
}