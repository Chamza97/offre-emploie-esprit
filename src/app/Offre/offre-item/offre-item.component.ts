import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Offre} from "../../Model/Offre";
import {Router} from "@angular/router";

@Component({
  selector: 'app-offre-item',
  templateUrl: './offre-item.component.html',
  styleUrls: ['./offre-item.component.css']
})
export class OffreItemComponent implements OnInit {
  @Input() offre:Offre;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  selectedOffre(offre){
    const link = ['offre/detail',offre.id];
    this.router.navigate(link);
  }
}
