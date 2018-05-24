import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listuserreclam',
  templateUrl: './listuserreclam.component.html',
  styleUrls: ['./listuserreclam.component.css']
})
export class ListuserreclamComponent implements OnInit {

  reclamations;

  constructor(private apiservice: ApiService, private router: Router) { }

  ngOnInit() {
    this.apiservice.ListUserReclamations().subscribe(res => {
      this.reclamations = res.json();
    });
  }

  addReclamation() {
    // Redirection vers la page de création d'une réclamation
    this.router.navigateByUrl('userhome/-1');
  }
}
