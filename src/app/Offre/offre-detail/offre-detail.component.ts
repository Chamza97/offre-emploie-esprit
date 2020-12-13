import { Component, OnInit } from '@angular/core';
import {OffresService} from "../../shared/offres.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Offre} from "../../Model/Offre";
import {UserService} from "../../shared/user.service";

@Component({
  selector: 'app-offre-detail',
  templateUrl: './offre-detail.component.html',
  styleUrls: ['./offre-detail.component.css']
})
export class OffreDetailComponent implements OnInit {
  offre : Offre = new Offre();
  isAdmin:boolean
  constructor(private service : OffresService,
              private activatedRoute: ActivatedRoute,
              private userService  :UserService,
              private router :Router){
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      (params)=>{
        this.service.getOffreById(params.id).subscribe(
          (result) => {
            this.offre = result;
            this.offre.id = params.id
          },
          (error) =>{
            console.log(error);
            }
          )
        }
      )
     if(JSON.parse(localStorage.getItem("user")).role == "ADMIN"){
       this.isAdmin = true;
     }
  }

  delete() {
      this.service.deleteOffre(this.offre.id).subscribe((rep)=>{
        this.router.navigate(['/offre'])
      })
  }
}
