import { RouterModule, Routes} from '@angular/router';
import { NgModule } from '@angular/core';
import { TutorsComponent } from './tutors/tutors.component';

const tutors: Routes = [
    {
        path: '',
        component: TutorsComponent
    }
];

@NgModule({
    imports: [ RouterModule.forChild(tutors)],
    exports: [ RouterModule]
})

export class TutorsRoutingModule {

}
