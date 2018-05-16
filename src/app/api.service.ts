import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as jwt from 'angular2-jwt-simple';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: Http) { }

  loginUser(userdata) {
    return this.http.post('http://localhost:3000/login', userdata);
  }

  RegisterUser(regdata) {
    return this.http.post('http://localhost:3000/register', regdata);
  }

  GetUserId() {
    const token = localStorage.getItem('tok');
    const Id = jwt.decode(token, 'mysecretcode')._id;
    return Id;
  }

  SendReclamation(reclam) {
    return this.http.post('http://localhost:3000/reclam/' + this.GetUserId(), reclam);
  }

  Upload(uploadFileForm) {
    return this.http.post('http://localhost:3000/upload/' + this.GetUserId(), uploadFileForm);
  }

}
