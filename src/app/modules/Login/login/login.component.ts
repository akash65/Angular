import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormsModule} from '@angular/forms';
import { Service } from 'src/app/services/service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // name: string;
  // password: string;
  form: FormGroup;

  fromStorage;
  objectsFromStorage;

  constructor(private router: Router, private fb: FormBuilder, private authservice: Service) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
   }

  ngOnInit() {


  }

  validateLogin() {
        return this.authservice.isLoggednIn();

  }

  onSubmit() {
    if (this.form.valid) {
      this.authservice.sendToken(this.form.value.name);
      this.router.navigate(['students']);
    }
  // const store = {
  //   name: 'demo',
  //   password: 'demo'
  // };

  //   localStorage.setItem('store', JSON.stringify(store));

  //   this.fromStorage = localStorage.getItem('store');
  //   this.objectsFromStorage = JSON.parse(this.fromStorage);


  //   if (this.objectsFromStorage === null) {
  //     this.router.navigate(['/']);
  //   } else {
  //     this.router.navigate(['/students']);
  //   }
    // this.router.navigate(['/students']);

  //   if ((!this.obj.name === 'demo' ) && (this.obj.password === 'demo') {
  //     return false;
  //   }
  //   this.router.navigate(['/students']);
  }



}
