import { Router} from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router ) { }

  canActivate() {
 this.auth.user$.map(user => {
   if(user) return true;

   this.router.navigate(['/login']);
   return false;
 }) 
  }
}
