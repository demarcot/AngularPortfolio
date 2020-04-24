import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import { AboutComponent } from './about/about.component';
import { ProjectComponent } from './project/project.component';
import {ProjectListComponent} from './project-list/project-list.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: AboutComponent },
      {path: 'projects', component: ProjectListComponent},
      {path: 'about', component: AboutComponent},
      {path: 'projects/:projectId', component: ProjectComponent},
    ])
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    AboutComponent,
    ProjectComponent,
    ProjectListComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
