import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(public afs: AngularFirestore, private router: Router, private toastrService: ToastrService) { }

  addUser(user: any) {
    const id = this.afs.createId();
    const item = {
      id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      phoneNumber: user.phoneNumber,
      twitterHandle: user.twitterHandle,
      instagramHandle: user.instagramHandle,
      city: user.city,
      university: user.university,
      level: user.level,
      experience: user.experience,
      description: user.description,
      salesMethod: user.salesMethod,

    }
    this.afs.collection('/salesReps').doc(id).set(item).then(
      () => {
        this.toastrService.success(`Thank you for registering with us ${user.firstName}. A notification would be sent to you via your email ${user.email}`);
        this.router.navigate(['/home'])
      }
    )

  }

}

