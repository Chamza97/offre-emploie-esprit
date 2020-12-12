import { Component, OnInit } from '@angular/core';
import {OffresService} from "../../shared/offres.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../shared/user.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-list-offres',
  templateUrl: './list-offres.component.html',
  styleUrls: ['./list-offres.component.css']
})
export class ListOffresComponent implements OnInit {
  offres = [];
  searchText ='';
  location = '';


  constructor(private service : OffresService,
              public userService:UserService,
              private activatedRoute: ActivatedRoute,
              private router :Router,
              ) {
     service.getOffres().subscribe(
       (result)=>{
          this.offres = result
       }
     );

  }

  ngOnInit(): void {
  }


  goToAddOffre() {
    this.router.navigate(['offre/add'])
  }


  reloadOffres($event: any) {
    this.offres = $event
  }
}
