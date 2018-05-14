import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { registerLocaleData } from '@angular/common';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {

  location;
  router ;
  date;
  description;
  constructor(private apiservice: ApiService) { }

  ngOnInit() {
  console.log(this.apiservice.GetUserId());

  }
  Btnuserhome() {
    const reclam = { location: this.location, date: this.date, description: this.description };
   console.log(reclam);
    this.apiservice.SendReclamation(reclam ).subscribe(res => {
      console.log(res.json());
    });
  }}
