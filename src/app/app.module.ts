import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { HeaderComponent } from './header/header.component';
import { ErrorComponent } from './error/error.component';
import {ROUTING} from "./app.routing";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FlexModule} from "@angular/flex-layout";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {Intercepteur} from "./interceptor/Interceptor";
import { OffreItemComponent } from './Offre/offre-item/offre-item.component';
import { OffreDetailComponent } from './Offre/offre-detail/offre-detail.component';
import {OffreComponent} from "./Offre/offre/offre.component";
import { ListOffresComponent } from './Offre/list-offres/list-offres.component';
import { AddOffreComponent } from './Offre/add-offre/add-offre.component';
import {TagInputModule} from "ngx-chips";
import {AngularEditorModule} from "@kolkov/angular-editor";
import { RegisterComponent } from './auth/register/register.component';
import { DefaultImagePipe } from './auth/default-image.pipe';
import {LoginGuard} from "./guards/LoginGuard";
import {LogoutGuard} from "./guards/LogoutGuard";
import { HomeComponent } from './home/home.component';
import { ShowUserComponent } from './auth/show-user/show-user.component';
import { UserListComponent } from './auth/user-list/user-list.component';
import { FilterPipe } from './Pipe/filter.pipe';
import {MatPaginatorModule} from '@angular/material/paginator';
import { UpdateOffreComponent } from './Offre/update-offre/update-offre.component';
import { TagPipe } from './Pipe/tag.pipe';
import { SearchPipe } from './Pipe/search.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HeaderComponent,
    ErrorComponent,
    OffreComponent,
    OffreItemComponent,
    OffreDetailComponent,
    ListOffresComponent,
    AddOffreComponent,
    RegisterComponent,
    DefaultImagePipe,
    HomeComponent,
    ShowUserComponent,
    UserListComponent,
    FilterPipe,
    UpdateOffreComponent,
    TagPipe,
    SearchPipe,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ROUTING,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    FlexModule,
    HttpClientModule,
    TagInputModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularEditorModule,
    FormsModule,
    MatPaginatorModule
  ],
  providers: [[{
    provide: HTTP_INTERCEPTORS,
    useClass: Intercepteur,
    multi: true
  }],
    LoginGuard,
    LogoutGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
