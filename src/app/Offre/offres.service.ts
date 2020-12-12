import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
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
    const data = JSON.stringify(offre);
    console.log(data)
    return this.http.post(this.link ,data);
  }
  deleteOffre(id):Observable<any>{
    return this.http.delete(this.link +'/' + id);
  }
  updateOffre(offre):Observable<any>{
    const data = JSON.stringify(offre);
    return this.http.put(this.link + '/',data);
  }
}
