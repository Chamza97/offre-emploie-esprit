import {Component, Injectable, OnInit} from '@angular/core';
import {User} from "../../Model/User";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../user.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {
  user : User
  constructor(private activatedRroute : ActivatedRoute,
              private router : Router,
              private  userService : UserService,
              private sanitizer: DomSanitizer
              ) { }

  ngOnInit(): void {
    this.activatedRroute.params.subscribe(
      (params) => {
        if (params['id']){
          this.user = JSON.parse(localStorage.getItem('user'))
          if(this.user?.photo != null ){
            this.user.photo =  <File>this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + this.user.photo);
          }

        }else{
          this.userService.getUserById(params['id']).subscribe(
            (rep)=>{
              this.user = rep;
            },
            (err)=>{
              console.log(err)
            }
          )
        }

      }
    )
  }

}
