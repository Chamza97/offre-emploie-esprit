import { Component, OnInit } from '@angular/core';
import {User} from "../../Model/User";
import {UserService} from "../../user.service";
import {OffresService} from "../offres.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Offre} from "../../Model/Offre";

@Component({
  selector: 'app-update-offre',
  templateUrl: './update-offre.component.html',
  styleUrls: ['./update-offre.component.css']
})
export class UpdateOffreComponent implements OnInit {
  offre :Offre
  constructor(private userService:UserService,
              private offresService:OffresService,
              private router:Router,
              private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.offresService.getOffreById(params['id']).subscribe((rep)=>{
        this.offre = rep
        console.log(rep)
      })
    })

  }

  ajouterFormulaire(valid: boolean) {
    if (valid){
      this.offresService.updateOffre(this.offre).subscribe(
        (rep)=>{
          this.router.navigate(['offre'])
        },
        (err)=>{
          console.log(err);
        }
      )
    }
  }
}
