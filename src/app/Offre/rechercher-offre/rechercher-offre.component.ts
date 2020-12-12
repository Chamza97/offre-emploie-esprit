import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {OffresService} from "../../shared/offres.service";
import {Offre} from "../../Model/Offre";

@Component({
  selector: 'app-rechercher-offre',
  templateUrl: './rechercher-offre.component.html',
  styleUrls: ['./rechercher-offre.component.css']
})
export class RechercherOffreComponent implements OnInit {
  oppoSuitsForm: FormGroup;
 @Output() data: EventEmitter<any> = new EventEmitter<any>();
  constructor(public fb: FormBuilder,
              private service : OffresService) {


  }

  ngOnInit(): void {
    this.oppoSuitsForm = this.fb.group({
      titre: [''],
      description: [''],
      anneeExperience: [''],
    })
  }
  onSubmit() {
    console.log("sdfsdfsd",this.oppoSuitsForm.value.titre)
    this.service.searchOffre(this.oppoSuitsForm.value.titre,this.oppoSuitsForm.value.description,this.oppoSuitsForm.value.anneeExperience).subscribe(
      (data)=>{
        this.data.emit(data)
      },
      (error)=>{
        console.log(error)
      }
    )
  }
  changeTitre(e) {
    this.oppoSuitsForm.get('titre').setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeDescription(e) {
    this.oppoSuitsForm.get('description').setValue(e.target.value, {
      onlySelf: true
    })
  }

  changeAnneeExperice(e) {
    this.oppoSuitsForm.get('titre').setValue(e.target.value, {
      onlySelf: true
    })
  }
}
