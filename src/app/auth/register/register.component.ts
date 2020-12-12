import { Component, OnInit } from '@angular/core';
import {UserService} from "../../shared/user.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  url: string  = '';

  selectedFile :File
  userData = { prenom: '', nom: '', password: '',username:'',email:'',cin:'',tel:'',dateDeNaissance:'',photo:''};
  constructor(private userService:UserService,
              private router : Router) { }

  ngOnInit(): void {

  }

  handleFileSelect(evt){
    var files = evt.target.files;
    var file = files[0];
    if (files && file) {
      var reader = new FileReader();
      reader.onload =this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
    if (evt.target.files && evt.target.files[0]) {
      var r = new FileReader();
      r.readAsDataURL(evt.target.files[0]); // read file as data url
      r.onload = (event) => { // called once readAsDataURL is completed
        this.url = event.target.result.toString();
      }
    }
  }
  _handleReaderLoaded(readerEvt) {
    var binaryString = readerEvt.target.result;
    this.userData.photo= btoa(binaryString);
  }




  ajouterFormulaire() {
    this.userService.register(this.userData).subscribe(
      (result)=>{
        localStorage.setItem('token',result.token);
        this.userService.getCurrentUser(this.userData.email)
        this.router.navigate(['']);

      },
      (error) => {

        console.log(error)
      }
    )
  }

}
