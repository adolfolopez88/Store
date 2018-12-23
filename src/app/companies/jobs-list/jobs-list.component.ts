import { trigger, transition, query, animate, stagger, keyframes, style } from '@angular/animations';
import { ProgressbarService } from './../../core/shell/services/progressbar.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { CompaniesService } from 'src/app/services/companies.service';
import { switchMap } from 'rxjs/operators';
import { SpinnerService } from 'src/app/core/shell/services/spinner.service';

@Component({
  selector: 'app-jobs-list',
  templateUrl: './jobs-list.component.html',
  styleUrls: ['./jobs-list.component.css'],
  animations: [
    trigger('listAnimation',  [

      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true}),

        query(':enter', stagger('300ms', [
          animate('1s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75px)', offset: 0 }),
            style({opacity: .5, transform: 'translateY(35px)', offset: 0.3 }),
            style({opacity: 1, transform: 'translateY(0)', offset: 1 })
          ]))
        ]), {optional: true } ),
      ])
    ])
  ]
})
export class JobsListComponent implements OnInit {

  company: any;
  jobs: Observable<any>;
  constructor(private companiesService: CompaniesService, private progressbar: ProgressbarService,
    private spinnerService: SpinnerService ) { }

  ngOnInit() {
    this.spinnerService.show();
    this.companiesService.subjectCompany.pipe(
      switchMap((company) => {
        this.company = company;
        return this.companiesService.retrieveJobs(company.company.companyId);
      })
    ).subscribe(jobs => {
      this.spinnerService.hide();
      this.jobs = jobs;
    });
  }
}
