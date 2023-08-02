import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
// import data from '../assets/data.json';

import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  template: 'passed in {{ data.name }}'
})

export class AddUserComponent {

  data: any
  displayedColumns: string[] = ['id', 'name', 'gender', 'class', 'seat', 'club', 'persona', 'crush', 'strength', 'hairstyle', 'color', 'eyes', 'info'];
  constructor(private dialogRef: MatDialogRef<AddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public cardsData: any) {
    console.log(this.cardsData);
  }

  // test() {
  //  console.log(this.cardsData);
  //  }

}