export class User {

  id;
  nom;
  prenom;
  dateDeNaissance;
  tel;
  cin;
  adresse;
  photo;
  username;
  email;
  role;

  constructor(id ="", nom="", prenom = "", dateDeNaissance=new Date(), tel = 0, cin, adresse="", photo= "",username="",email="",role="") {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.dateDeNaissance = dateDeNaissance;
    this.tel = tel;
    this.cin = cin;
    this.adresse = adresse;
    this.photo = photo;
    this.username = username;
    this.email = email;
    this.role = role;
  }

}
