import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { StudentsComponent } from '../Students/students/students.component';

const students: Routes = [
    {
        path: '',
        component: StudentsComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(students)],
    exports: [ RouterModule]
})

export class StudentRoutingModule {

}
