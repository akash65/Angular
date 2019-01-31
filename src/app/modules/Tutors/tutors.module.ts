import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { TutorsComponent } from './tutors/tutors.component';
import { TutorsRoutingModule } from './tutors-routing.module';
import { Service } from 'src/app/services/service';

@NgModule({
    declarations: [TutorsComponent],
    imports: [TutorsRoutingModule, CommonModule],
    providers: [ Service]
})

export class TutorsModule {

}
