import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyCgYKGwp-c--AxvspnRG5GRj18sAQUxy8Q",
      authDomain: "angular-money.firebaseapp.com"
    });
  }
  
 }
