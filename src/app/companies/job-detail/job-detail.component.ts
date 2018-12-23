import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Member } from './../job/job.component';
import { CompaniesService } from './../../services/companies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { startWith, map } from 'rxjs/operators';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {

  companyId: string;
  jobId: string;
  job: any = {};
  companyMembers: Member[] = [];
  company: any;
  selectedOption: any;
  filteredOptions: Observable<Member[]>;
  inputControl = new FormControl();
  constructor(private route: ActivatedRoute, private companiesService: CompaniesService) { }

  ngOnInit() {
    this.companyId = this.route.snapshot.params.companyId;
    this.jobId = this.route.snapshot.params.jobId;

    this.companiesService.getJob(this.companyId, this.jobId)
    .subscribe((job) => {
      this.job = job;
    });

    this.companiesService.subjectCompany.subscribe(company => {
      console.log(company);
      this.companyMembers = company.members;
      this.company = company;
    });

    this.filteredOptions = this.inputControl.valueChanges.pipe(
      startWith(''),
      map(value => {
        if (value === null ) { value = ''; }
        return this._filter(value);
      })
    );
  }

  addMember() {

    const members = this.company.members;
    members.push(this.selectedOption);
    const data = { confirmed: false, members: members };
    this.companiesService.addMember(this.companyId, this.jobId, data)
    .then(() => console.log('saved'));
  }

  displayFn(option: Member) {
    return option ? option.name : '' ;
  }

  returnFn($event) {
    this.selectedOption = $event.option.value;
  }

  private _filter(res: any): Member[] {
    const filterValue = typeof res === 'string' && res !== null ? res.toLowerCase() : res.value;
    return this.companyMembers.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
