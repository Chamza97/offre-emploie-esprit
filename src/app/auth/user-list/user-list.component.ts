import { Component, OnInit } from '@angular/core';
import {User} from "../../Model/User";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../user.service";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users : User[]
  constructor(private activatedRroute : ActivatedRoute,
              private router : Router,
              private  userService : UserService,
              private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.userService.getAllUsers().subscribe(
      (rep)=>{
          rep.forEach(u =>{
          u.photo =   <File>this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + u.photo);
        })
        this.users = rep;
      },
      (err)=>{
        alert(err)
      }
    )
  }

  selectUser(id) {
    this.router.navigate(['user/'+ id])
  }
}
