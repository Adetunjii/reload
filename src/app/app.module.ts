import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductComponent } from './product/product.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { RegistrationComponent } from './registration/registration.component';
import { FooterComponent } from './footer/footer.component'
import { HomeModule } from './home/home/home.module';
import { SpinnerComponent } from './spinner/spinner.component';
import { environment } from 'src/environments/environment.prod';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormService } from './form.service';
import { AngularFireModule } from '@angular/fire'
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ToastrModule } from 'ngx-toastr';
import { CommonModule } from '@angular/common';
import { IconsModule } from 'angular-bootstrap-md';
import { TestimoniesComponent } from './testimonies/testimonies.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProductComponent,
    NavbarComponent,
    RegistrationComponent,
    FooterComponent,
    SpinnerComponent,
    ConfirmationComponent,
    TestimoniesComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    IconsModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    HomeModule,
    ToastrModule.forRoot({
      timeOut: 20000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
      closeButton: true,

    }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,

  ],
  providers: [
    FormService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
