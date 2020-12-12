import {RouterModule} from "@angular/router";
import {SignInComponent} from "./auth/sign-in/sign-in.component";
import {ErrorComponent} from "./error/error.component";
import {OffreComponent} from "./Offre/offre/offre.component";
import {OffreDetailComponent} from "./Offre/offre-detail/offre-detail.component";
import {AddOffreComponent} from "./Offre/add-offre/add-offre.component";
import {RegisterComponent} from "./auth/register/register.component";
import {LogoutGuard} from "./guards/LogoutGuard";
import {LoginGuard} from "./guards/LoginGuard";
import {HomeComponent} from "./home/home.component";
import {ShowUserComponent} from "./auth/show-user/show-user.component";
import {UserListComponent} from "./auth/user-list/user-list.component";
import {UpdateOffreComponent} from "./Offre/update-offre/update-offre.component";


const APP_ROUTING = [
  {path:'offre', children:[
      {path:'', component: OffreComponent },
      {path:'add', component: AddOffreComponent , canActivate: [LoginGuard] },
      {path:'detail/:id', component: OffreDetailComponent },
      {path:'update/:id', component: UpdateOffreComponent,  canActivate: [LoginGuard]},
    ]},
  {path:'user', children:[
      {path:'', component: ShowUserComponent ,canActivate: [LoginGuard]},
      {path:'list', component: UserListComponent , canActivate: [LoginGuard] },
      {path:':id', component: ShowUserComponent,  canActivate: [LoginGuard]},
    ]},
  {path:'login', component: SignInComponent},
  {path:'register', component: RegisterComponent},
  {path:'', component: HomeComponent},
  {path:'**', component: ErrorComponent}
];
export const ROUTING = RouterModule.forRoot(APP_ROUTING, { relativeLinkResolution: 'legacy' });
