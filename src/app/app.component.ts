import { Component, ViewEncapsulation } from '@angular/core';
// import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from './add-user/add-user.component';
import data from '../assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None​
})

export class AppComponent {
  title = 'ng-json';
  
  dataSource= data;
  displayedColumns: string[] = ['id', 'name', 'date'];
  USER_DATA: any;

  constructor(public dialog: MatDialog) {}

    openDialog(cards:any) {
      this.dialog.open(AddUserComponent, {
        data: cards
      });
    }

    dataJson = data;
    displayedColoums1: string[] = ['id', 'name', 'gender','class','seat','club','persona','crush','strength','hairstyle','color','eyes','info'];
}