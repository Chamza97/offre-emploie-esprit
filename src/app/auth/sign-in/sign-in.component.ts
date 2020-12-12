import {Component, Inject, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {UserService} from "../../user.service";


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router:Router,
              private http:HttpClient,
              private authService:UserService) { }

  ngOnInit(): void {
  }
  login(formulaire){
    if(formulaire.email == null){
      return
    }
    this.authService.login(formulaire.email,formulaire.password).subscribe(
      (response)=>{
          localStorage.setItem('token',response.accessToken);
          this.authService.getCurrentUser(formulaire.email)
          this.router.navigate(['']);
      },
      (error)=>{
        console.log(error)
      }
    )
  }



}
