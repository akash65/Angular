import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './modules/Login/login/login.component';
import { StudentsComponent } from './modules/Students/students/students.component';
import { TutorsComponent } from './modules/Tutors/tutors/tutors.component';

import { HttpClientModule} from '@angular/common/http';
import { Service } from './services/service';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginGuard } from './services/loginGuard.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Service , LoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
