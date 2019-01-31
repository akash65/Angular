import { Component, OnInit } from '@angular/core';
import { Service } from '../../../services/service';
import { NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  StudentDetails: any;
  addStudent = [];
  fName: string;
  lName: string;
  obj;
  // addDetails: string;
  display = 'none';

  constructor(private service: Service, private modal: NgbModal) { }

  ngOnInit() {
    this.service.get('https://nobounds-testbe.powerofn.in/api/getAllStudents').subscribe((Response) => {
      return this.StudentDetails = Response;
    },
    (error) => {
      return error;
    });
  }

  getStudent() {
    this.obj = {
      first_name : this.fName,
      last_name : this.lName
    };
    this.StudentDetails.push(this.obj);
  }
  open() {
    this.display = 'none';
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
