import { Injectable } from '@angular/core';
import { userData } from './models/userData';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  user: userData;

  constructor() {

    this.user = {
      userName: '',
      userType: ''
    };
  }

  setUser(userName: string, userType: string) {

    this.user={
      userName: userName,
      userType: userType
    }
  }

  resetUserData() {

    this.user = {
      userName: '',
      userType: ''
    };
  }

  getUserData() {
    return this.user;
  }
}
