import {Tag} from "./Tag";

export class Offre {
  id;
  titre;
  description;
  salaire;
  status;
  contratType;
  adresse;
  nbAnneeExperience;
  datePublication;
  dateModification;
  tags : Tag[];
  userId : string;

  constructor(id ="", titre ="", description ="", salaire =0, status=0,
              contrat_type ="", adresse="", nbAnneeExperience =0, datePublication = new Date(),
              dateModification= new Date(),tags=[], user ="") {
    this.id = id;
    this.titre = titre;
    this.description = description;
    this.salaire = salaire;
    this.status = status;
    this.contratType = contrat_type;
    this.adresse = adresse;
    this.nbAnneeExperience = nbAnneeExperience;
    this.datePublication = datePublication;
    this.dateModification = dateModification;
    this.tags = tags;
    this.userId = user;
  }

}
