import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Offre} from "../Model/Offre";

@Injectable({
  providedIn: 'root'
})
export class OffresService {

  link = 'http://localhost:3000/offres'
  constructor(private http:HttpClient) {

  }
  getOffres():Observable<Offre[]> {
    return this.http.get<Offre[]>( this.link );
  }
  getOffreById(id):Observable<Offre>{
    return this.http.get<Offre>(this.link +'/'+id);
  }
  saveOffre(offre):Observable<any>{
  offre.id = Math.random().toString(36).slice(2)
    const data = JSON.stringify(offre);
    return this.http.post(this.link ,data);
  }
  deleteOffre(id):Observable<any>{
    console.log(id)
    return this.http.delete(this.link +'/' + id);
  }
  updateOffre(offre):Observable<any>{
    const data = JSON.stringify(offre);
    return this.http.put(this.link +'/'+offre.id,data);
  }
  searchOffre(titre:string,description:string,anneeExperience:string):Observable<Offre[]>{

    let params = new HttpParams();
    if(titre != null){
     params =  params.append('titre_like', titre);
    }
    if(description != null && description != ''){
      params =  params.append('description_like',description);
    }
    if(anneeExperience != null && anneeExperience != ''){
      params =  params.append('nbAnneeExperience',String(anneeExperience));
    }

    return this.http.get<Offre[]>( this.link ,{params:params});
  }
}
