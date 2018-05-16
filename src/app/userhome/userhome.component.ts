import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { registerLocaleData } from '@angular/common';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-userhome',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
  http: any;
  selectedFile: File;
  location;
  router;
  date;
  description;

  constructor(private apiservice: ApiService, http: HttpClient) { }

  ngOnInit() {
    console.log(this.apiservice.GetUserId());

  }
  Btnuserhome() {
    const reclam = { location: this.location, date: this.date, description: this.description };
    console.log(reclam);
    this.apiservice.SendReclamation(reclam).subscribe(res => {
      console.log(res.json());
    });
  }


  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);

    this.apiservice.Upload(fd).subscribe(res => {
      console.log(res.json());
    });
  }
}

