import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  erreur: any;
  mail: any;
  password;
  tok;

  constructor(private apiservice: ApiService, private router: Router) { }

  ngOnInit() { }

  addBtn() {
    const userdata = { mail: this.mail, password: this.password };
    console.log(userdata);
    this.apiservice.loginUser(userdata).subscribe(res => {
      console.log(res.json());
      this.tok = (res.json().token);

      if (res.json().message === 'ok') {
        localStorage.setItem('tok', res.json().token);
        this.router.navigateByUrl('userhome');
      } else {
        this.erreur = res.json().message;
        console.log(this.erreur);
      }
    });
  }
}
