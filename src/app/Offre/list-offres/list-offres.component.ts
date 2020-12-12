import { Component, OnInit } from '@angular/core';
import {OffresService} from "../offres.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../user.service";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-list-offres',
  templateUrl: './list-offres.component.html',
  styleUrls: ['./list-offres.component.css']
})
export class ListOffresComponent implements OnInit {
  offres = [];
  searchText ='';
  skill = '';
  experience :number=  1;
  location = '';
  contrat = '';
  options = ["CDI","CDD"]
   oppoSuitsForm: FormGroup;
  CDI: any;
  constructor(private service : OffresService,
              public userService:UserService,
              private activatedRoute: ActivatedRoute,
              private router :Router,
              public fb: FormBuilder) {
     service.getOffres().subscribe(
       (result)=>{
          this.offres = result
       }
     );
    this.oppoSuitsForm = this.fb.group({
      name: ['']
    })
  }

  ngOnInit(): void {
  }


  goToAddOffre() {
    this.router.navigate(['offre/add'])
  }

  search() {
console.log(this.experience)
  }

  changeExperience(value: number) {
    this.experience = value
  }

  onSubmit() {
    alert(JSON.stringify(this.oppoSuitsForm.value))
  }

  changeSuit(e) {
    console.log(e)
    this.oppoSuitsForm.get('name').setValue(e.target.value, {
      onlySelf: true
    })
  }
}
