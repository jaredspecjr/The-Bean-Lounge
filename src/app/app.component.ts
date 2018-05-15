import { Component } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { Router } from '@angular/router';
import * as firebase from "firebase";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})
export class AppComponent {
  title = 'The Bean Lounge';

  constructor(public authService: AuthenticationService, private router: Router) {  }

}
