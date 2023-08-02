import { Component, Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
// import data from '../assets/data.json';

import { MatDialogRef } from '@angular/material/dialog';


interface Data {
  id: string;
  name: string;
  gender: string;
  class: string;
  seat: string;
  club: string;
  persona: string;
  crush: string;
  strength: string;
  hairstyle: string;
  color: string;
  eyes: string;
  info: string;
}


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  template: 'passed in {{ data.name }}'
})

export class AddUserComponent {
  // userData =this.userData;          
  data: any
  displayedColumns: string[] = ['id', 'name', 'gender', 'class', 'seat', 'club', 'persona', 'crush', 'strength', 'hairstyle', 'color', 'eyes', 'info'];
  constructor(  private dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public cardsData: any) {
    // this.data = cardsData;
    console.log(this.cardsData);
  }

  // cards: Data[] = [];
  // ngOnInit(): void {
  //   this.cards = this.shared.getData();
  //   console.log(this.cards);
  // }

  // dataJson = this.cards;  

  mega() {
    console.log(this.cardsData);
  }

}