import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { RecguardGuard } from './recguard.guard';
import { UserhomeComponent } from './userhome/userhome.component';
import { ListuserreclamComponent } from './listuserreclam/listuserreclam.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent, canActivate: [RecguardGuard]
  },
   {
    path: 'userhome/:index',
    component: UserhomeComponent, canActivate: [RecguardGuard]
  },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'list',
    component: ListuserreclamComponent, canActivate: [RecguardGuard]
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
