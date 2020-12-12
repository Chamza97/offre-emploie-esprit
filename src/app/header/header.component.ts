import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../shared/user.service";
import {User} from "../Model/User";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  visibility :Boolean = false
  curruntUser :User
  constructor(private activatedRoute: ActivatedRoute,
              private router :Router,
              public userService : UserService,
              private sanitizer: DomSanitizer) {
    if (localStorage.getItem('user')){
      this.curruntUser = JSON.parse(localStorage.getItem('user'))
    }
  }

  ngOnInit(): void {
    if(this.curruntUser?.photo != null ){
      this.curruntUser.photo =  <File>this.sanitizer.bypassSecurityTrustResourceUrl('data:image/jpg;base64,' + this.curruntUser.photo);
    }
  }
  logOut(){
    this.userService.logout();
    this.router.navigate(['']);
  }
  show(){
    this.visibility = !this.visibility
  }
  goToShowProfile(){
    const userId = JSON.parse( localStorage.getItem('user')).id
    this.router.navigate(['user',userId])
  }
}
