import { MessagingService } from './../../services/messaging.service';
import { first } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { Component, OnInit } from '@angular/core';
import { CompaniesService } from 'src/app/services/companies.service';
import { User } from 'src/app/models/support';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.css']
})
export class ShellComponent implements OnInit {

  constructor(private authService: AuthService, private messagingService: MessagingService, private companyService: CompaniesService) { }

  ngOnInit() {

    this.authService.currentUserAsP()
    .then( (current) => this.authService.getUser(current.uid).pipe(first()).toPromise())
    .then( (user: User) => {
      this.authService.setCurrentUser(user);
      return this.companyService.retriveCompany(user.companyId).pipe(first()).toPromise();
    }).then((company) => {
      this.companyService.setCompany(company);
    })
    .catch((error) => console.log(error));




  }

  showMessage() {
    this.messagingService.currentMessage.next({ title: '4', body: 'pico pal que lo lee', to: 'mi pico'});
  }

}
