import { CommonModule } from '@angular/common';
import { NgModule} from '@angular/core';
import { StudentsComponent } from './students/students.component';
import { StudentRoutingModule } from './students-routing.module';
import { Service } from 'src/app/services/service';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [StudentsComponent],
    imports: [StudentRoutingModule, CommonModule, FormsModule],
    providers: [ Service]
})

export class StudentsModule {

}
