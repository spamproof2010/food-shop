import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'bs-navbar',
  templateUrl: './bs-navbar.component.html',
  styleUrls: ['./bs-navbar.component.css']
})
export class BsNavbarComponent {
// this is how you declare a vriable in ng
// firebase.User is used b/c you saw it's mentioned as an observale in the authState type below in constructor
  aUser$: Observable<firebase.User>;  

  constructor(private afAuth: AngularFireAuth) {
    this.aUser$ = afAuth.authState;
   }
  logout() {
    alert("logging out");
    this.afAuth.auth.signOut();
  }
}
