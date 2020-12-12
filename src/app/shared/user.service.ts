import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../Model/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  link = 'http://localhost:3000/';
   currentUser : User;

  constructor(private http:HttpClient) {

  }
  login(email:string,password:string):Observable<any>{
      return this.http.post('http://localhost:3000/login', "{\"email\" :\"" + email + "\" , \"password\" : \""+ password + "\"}");
  }
  logout(){
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    this.currentUser =null;
  }
  getCurrentUser(email){
      this.http.get<User>(this.link + "users",{params: {email: email}}).subscribe(result => {
        localStorage.setItem('user',JSON.stringify(result[0]))
      });
  }
  isLogged(){
    return !! localStorage.getItem('token')
  }
  register(formulaire):Observable<any>{
    return this.http.post(this.link+'register', formulaire);
  }
  getUserById(id):Observable<User>{
    return this.http.get<User>(this.link +'users' + `/${id}`)
  }
  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.link + 'users')
  }
  isAdmin():boolean{
    if(localStorage.getItem('user')){
        const u = JSON.parse(localStorage.getItem('user'))
      return u.role == "ADMIN";
    }
  }
}
