import { Component, OnInit } from '@angular/core';
import { Service } from '../../../services/service';

@Component({
  selector: 'app-tutors',
  templateUrl: './tutors.component.html',
  styleUrls: ['./tutors.component.scss']
})
export class TutorsComponent implements OnInit {

  tutorDetails: any;
  constructor(private service: Service) { }

  ngOnInit() {
    this.service.get('https://nobounds-testbe.powerofn.in/api/getAllTutors')
    .subscribe((response) => {
      return this.tutorDetails = response;
    },
    (error) => {
      return error;
    });
  }

  // getTutor() {
  //   this.service.get('https://nobounds-testbe.powerofn.in/api/getAllTutors')
  //   .subscribe((response) => {
  //     return this.tutorDetails = response;
  //   },
  //   (error) => {
  //     return error;
  //   });
  // }
}
