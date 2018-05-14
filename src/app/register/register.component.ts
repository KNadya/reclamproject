import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  mail: any;
  name;
  lastname;
  password;

  constructor(private apiservice: ApiService, private router: Router) { }

  ngOnInit() {
  }
  addBtn() {
    const regdata = { mail: this.mail, password: this.password };
    console.log(regdata);
    this.apiservice.RegisterUser(regdata).subscribe(res => {
      this.router.navigateByUrl('login');
    });
}

}
