import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './modules/Login/login/login.component';
import { StudentsComponent } from './modules/Students/students/students.component';
import { TutorsComponent } from './modules/Tutors/tutors/tutors.component';
import { CanActivate } from '@angular/router/src/utils/preactivation';
import { LoginGuard } from './services/loginGuard.service';

const routes: Routes = [
    {
        path: '',
        loadChildren: './modules/Login/login.module#LoginModule'
    },
    {
        path: 'students',
        canActivate: [LoginGuard],
        loadChildren: './modules/Students/students.module#StudentsModule',

    },
    {
        path: 'tutors',
        loadChildren: './modules/Tutors/tutors.module#TutorsModule'
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {

}
