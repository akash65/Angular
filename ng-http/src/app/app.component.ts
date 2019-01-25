import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user: any;
  post: any;
  constructor(private httpService: HttpService) {}

  getUser() {
    this.httpService.get('https://jsonplaceholder.typicode.com/users')
      .subscribe(
        (data) => {
          this.user = data;
        },
        (error) => {

        }
      );
  }

  getPost() {
    this.httpService.get('https://jsonplaceholder.typicode.com/posts')
      .subscribe(
        (data) => {
          this.post = data;
        },
        (error) => {

        }
      );
  }
}
