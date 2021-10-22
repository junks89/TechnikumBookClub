import { userData } from './../models/userData';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  protected _userDataSubscription: Subscription = new Subscription;
  user!: userData;
  constructor(private userdataService: UserdataService) { }

  ngOnInit(): void {
    this.user = this.userdataService.getUserData();
 

  }
  resetUser(){
    this.userdataService.resetUserData();
  }
  message(){
    alert('to be implemented');
  }

}
