import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { registerLocaleData } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})

export class UserhomeComponent implements OnInit {

  http: any;
  selectedFiles: File[] = [];
  location;
  date;
  description;

  constructor(private apiservice: ApiService, private router: Router) { }

  ngOnInit() {
  }

  // Créer la réclamation
  sendReclamation(reclamForm: NgForm) {
    const fd = new FormData();

    fd.append('details', JSON.stringify(reclamForm.value));
    for (let img of this.selectedFiles) {
      fd.append('images[]', img, img.name);
    }

    this.apiservice.SendReclamation(fd).subscribe(res => {
      // TODO : gérer correctement la réponse serveur
      // Afficher une erreur ou un message de succès
      console.log(res.json());
      this.router.navigate(['/list']);
    });
  }

  onFileSelected(event) {
    this.selectedFiles.push(<File>event.target.files[0]);
  }

}

