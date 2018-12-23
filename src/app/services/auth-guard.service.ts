import { take, map, tap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

      return this.authService.authState.pipe(
        take(1),
        map(user => !!user),
        tap( loggedIn => {
          if (!loggedIn) {
            console.log('access denied');
            this.router.navigate(['/login']);
          }
        }));
  }

}
