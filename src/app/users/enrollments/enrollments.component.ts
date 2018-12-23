import { EnrollmentsService, Enrollment } from './../../services/enrollments.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enrollments',
  templateUrl: './enrollments.component.html',
  styleUrls: ['./enrollments.component.css']
})
export class EnrollmentsComponent implements OnInit {

  enrollments: Enrollment[] = [
   { uid: 'dasdasdasdasd', firstName: 'Adolfo', lastName: 'Lopez', otherName: '', dateOfBirth: '', address: '', phone: '5454545454',
    email: 'adolfolopez88@gmail.com', dateAvailable: 'dasdasdasdasdas',
    photoUrl: 'https://graph.facebook.com/10215309007976777/picture', active: true },
    { uid: 'dasdasdasdasd', firstName: 'Adolfo', lastName: 'Lopez', otherName: '', dateOfBirth: '', address: '', phone: '5454545454',
    email: 'adolfolopez88@gmail.com', dateAvailable: 'dasdasdasdasdas',
    photoUrl: 'https://graph.facebook.com/10215309007976777/picture', active: true },
    { uid: 'dasdasdasdasd', firstName: 'Adolfo', lastName: 'Lopez', otherName: '', dateOfBirth: '', address: '', phone: '5454545454',
    email: 'adolfolopez88@gmail.com', dateAvailable: 'dasdasdasdasdas',
    photoUrl: 'https://graph.facebook.com/10215309007976777/picture', active: true },
  ];
  displayedColumns: string[] = ['name', 'dateAvailable', 'activate'];
  constructor(private enrollmentsService: EnrollmentsService) { }

  ngOnInit() {
   /*  this.enrollmentsService.getCollection$((ref) => ref.where('active', '==', false)).subscribe(enrollments => {
      this.enrollments = enrollments;
    }); */
  }

  activateEnrollment(uid: string ) {
    this.enrollmentsService.update(uid, { active: true }).then(() => { console.log('user activated'); });
  }

}
