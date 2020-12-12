import {Component, Input, OnInit} from '@angular/core';
import {Offre} from "../../Model/Offre";
import {OffresService} from "../offres.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrls: ['./add-offre.component.css']
})
export class AddOffreComponent implements OnInit {

   offre : Offre = new Offre() ;
  constructor(private offresService :OffresService,
              private router:Router,) { }

  ngOnInit(): void {

  }
  ajouterFormulaire(valid: boolean) {
    if (valid){
      this.offresService.saveOffre(this.offre).subscribe(
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
