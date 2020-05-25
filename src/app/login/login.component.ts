import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from "../user.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(private route: ActivatedRoute, private router: Router, private service: UserService) { }

ngOnInit() {
   // get return url from route parameters or default to '/'
   this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }
  
  login() {
      if(this.service.login('test', 'test')) {
        this.router.navigate([this.returnUrl]);
      }
  }
}
