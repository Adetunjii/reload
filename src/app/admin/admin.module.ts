import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { SalesRepsComponent } from '../sales-reps/sales-reps.component';


@NgModule({
  declarations: [
    AdminComponent,
    SalesRepsComponent

  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MDBBootstrapModule.forRoot(),
    AngularFireAuthModule,

  ]
})
export class AdminModule { }
