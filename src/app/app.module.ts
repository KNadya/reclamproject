import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { RecguardGuard } from './recguard.guard';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { UserhomeComponent } from './userhome/userhome.component';
import { HttpClientModule } from '@angular/common/http';
import { ListuserreclamComponent } from './listuserreclam/listuserreclam.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    UserhomeComponent,
    ListuserreclamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule

  ],
  providers: [AppRoutingModule, RecguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }


