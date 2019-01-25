import { Component } from '@angular/core';
import {SampHttp} from './sampHttp.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  todo: any;
  post: any;
  pData: any;
  constructor(private http: SampHttp) {}

  getTodo() {
    this.http.get('https://jsonplaceholder.typicode.com/todos')
    .subscribe(
      (val) => {
        this.todo = val;
        console.log(this.todo);
      },
      (err) => {
        console.log('error', err);
      }
    );
  }

  getPost() {

    this.http.get('http://192.168.14.97:8000/api/authors ')
    .subscribe(
      (pos) => {
        this.post = pos;
        console.log(pos);
      },
      (err) => {
        console.log(err);
      }
      );

  }

  // getPost() {

  //   this.http.post('https://jsonplaceholder.typicode.com/posts',
  //   {'userId': 10, 'id': 101, 'title': 'a@gmail.com', 'body': 'abc' })
  //   .subscribe(
  //     (pos) => {
  //       this.post = pos;
  //       console.log('data success added', pos);
  //     },
  //     (err) => {
  //       console.log(err);
  //     }
  //     );

  // }

  postData() {
    // const params = JSON.stringify({
    //   title: 'samp title',
    //   body: 'names',
    //   userId: 1234
    // });
    this.http.post('http://localhost:3000/customers',
    // {'id': 10, 'name': 'arun', 'email': 'a@gmail.com', 'github': 'abc', 'twitter': 'samp title', 'location': 'names' })
    {'id': 301, 'name': 'arun', 'email': 'a@gmail.com'})
    .subscribe((value) => {
    console.log('data success added', value);
    this.pData = value;
  }, (err) => {});
  }

  put() {
    this.http.put('http://192.168.14.97:8000/api/authors/', {'id': 3, 'name': 'arun', 'email': 'a@gmail.com'})
    .subscribe((res) => {
      console.log(res);
    },
    (err) => {

    });
  }
}
