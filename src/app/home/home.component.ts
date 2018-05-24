import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit() {
  }

  constructor(private router: Router) { }

  LogOut() {
    // Vider le token
    localStorage.removeItem('tok');

    // Retourner à la page de login
    this.router.navigateByUrl('/login');
  }

}
