import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { Service } from '../../services/service';
import { FormsModule,   } from '@angular/forms';
import { LoginGuard } from 'src/app/services/loginGuard.service';
import { MatCardModule } from '@angular/material';

@NgModule({
declarations:
[
    LoginComponent
],
imports: [LoginRoutingModule, CommonModule, FormsModule, MatCardModule],
providers: [ Service, LoginGuard ]
})

export class LoginModule {

}
