import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private afAuth: AuthService) {

   }
login(){
//  this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
this.afAuth.login();
}
}
