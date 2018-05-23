import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-listuserreclam',
  templateUrl: './listuserreclam.component.html',
  styleUrls: ['./listuserreclam.component.css']
})
export class ListuserreclamComponent implements OnInit {

  reclamations;

  constructor(private apiservice: ApiService) { }

  ngOnInit() {
    this.apiservice.ListUserReclamations().subscribe(res => {
      this.reclamations = res.json();
    });
  }

}
