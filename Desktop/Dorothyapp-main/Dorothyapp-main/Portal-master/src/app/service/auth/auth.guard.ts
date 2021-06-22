import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import Auth from '@aws-amplify/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private _router: Router ) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return Auth.currentAuthenticatedUser().then(() => {return true; })
    .catch(() => {
      this._router.navigate(['registation']);
      return false;
    });
  }
  canLoad(route: Route):  Observable<boolean>|Promise<boolean>|boolean
  {
    return Auth.currentAuthenticatedUser().then(() => {return true; })
    .catch(() => {
      this._router.navigate(['registation']);
      return true;
    })
  }

    
}
