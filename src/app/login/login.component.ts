import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserdataService } from '../userdata.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: boolean = false;

  constructor(private router: Router, 
    private userdataService: UserdataService) { }

  ngOnInit(): void {
  }


  goToOverview(f: NgForm) {
    console.log("f", f.value)
    if (f.value?.email === "voeber" && f.value?.password === "1234") {
      this.userdataService.setUser('voeber','Lektor')
      this.router.navigate(['/overview']);

    }
    else if (f.value?.email === "student" && f.value?.password === "1234") {
      this.userdataService.setUser('student','Student')
      this.router.navigate(['/overview']);
    }
    else {
      this.error = true;
 
    }

  }

 

}
