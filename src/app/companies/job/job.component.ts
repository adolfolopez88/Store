import { transition, query, animate, stagger, style, trigger, keyframes } from '@angular/animations';
import { CompaniesService } from './../../services/companies.service';
import { FirestoreGenericService } from './../../services/firestore-generic.service';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Option } from '../user-list/user-list.component';
import { AuthService } from 'src/app/services/auth.service';

export interface Member {
  uid: string;
  name: string;
  photoUrl: string;
}

export interface Job {
  photoCompany: string;
  date: string;
  address: string;
}

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.css'],
})
export class JobComponent implements OnInit {

  @ViewChild('placeAddress') placeAdress: GooglePlaceDirective;

  formJob = this.formBuilder.group({
    address: ['', Validators.required],
    date: ['', Validators.required]
  });

  submitted = false;
  haveMemberError = false;
  companyMembers: Option[] = [];
  teamMembers: Member[] = [];
  user: any;
  company: any;

  constructor(private formBuilder: FormBuilder, private fs: FirestoreGenericService,
    private authService: AuthService, private companiesService: CompaniesService) { }

  ngOnInit() {

    this.authService.userSubject.subscribe(user => {
      this.user = user;
    });

    this.companiesService.subjectCompany.subscribe(company => {
      this.companyMembers = company.members.map(member => {
        return { key: member.uid, value: member.name, photoUrl: member.photoUrl }; });

      this.company = company;
    });
  }

  get form() {
    return this.formJob.controls;
  }

  public register() {
    this.submitted = true;
    this.haveMemberError = false;

    if ( this.teamMembers.length === 0) {
      this.haveMemberError = true;
      return;
    }

    if (this.formJob.invalid) {
      return;
    }

    this.formJob.value.companyId = this.user.companyId;
    this.formJob.value.members = this.teamMembers;

    this.fs.addWithId(`companies/${this.user.companyId}/jobs`, this.formJob.value)
      .then((job) => {
        console.log('job created');
      });
  }

  public membersTeam($event) {
    this.teamMembers = $event;
    console.log(this.teamMembers);
  }

}
