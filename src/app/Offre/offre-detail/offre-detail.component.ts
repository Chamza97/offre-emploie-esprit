import { Component, OnInit } from '@angular/core';
import {OffresService} from "../offres.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Offre} from "../../Model/Offre";
import {UserService} from "../../user.service";

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
            console.log(result)
            this.offre = result;
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
