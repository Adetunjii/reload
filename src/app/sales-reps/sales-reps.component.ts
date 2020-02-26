import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sales-reps',
  templateUrl: './sales-reps.component.html',
  styleUrls: ['./sales-reps.component.scss']
})
export class SalesRepsComponent implements OnInit {

  salesReps: any = []

  constructor(public afs: AngularFirestore) { }

  ngOnInit(): void {
    console.log(this.getSongs());
    this.salesReps = this.getSongs()
  }

  getSongs() {
    return this.afs.collection(`salesReps`).valueChanges()
  }

}
