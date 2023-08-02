import { Component, ViewEncapsulation } from '@angular/core';
// import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AddUserComponent } from './add-user/add-user.component';
import data from '../assets/data.json';
import { ServiceService } from 'src/service.service';
// interface Data1 {
//   id: string;
//   name: string;
//   gender: string;
//   class: string;
//   seat: string;
//   club: string;
//   persona: string;
//   crush: string;
//   strength: string;
//   hairstyle: string;
//   color: string;
//   eyes: string;
//   info: string;
// }

// export interface userData {
//   id: string;
//   name: string;
//   date: string;
// }

// const USER_DATA: userData[] = data;
// const nameContainer = document.getElementById('nameContainer')!;
// nameContainer.addEventListener('click', onClickHandler);
// function onClickHandler(event: MouseEvent){
//   const target = event.target as HTMLButtonElement;
//   if (target.tagName === 'BUTTON') {
//     const clickedName = target.innerHTML;
//     const foundObject = data.find((item) => item.name === clickedName);
    
//     if(foundObject) {
//       console.log('Name: ', foundObject.name);
//       console.log('')
//     }else{
//       console.log('Object not found.');
//     }
//   }
// }
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

  constructor(public dialog: MatDialog, private shared: ServiceService) {}

  // openDialog(
    // element: any
    // ) {
    // jsonData;
    // this.dialog.open(
    //   AddUserComponent
      // , {
    //   data: element.cards[0],
    // }
    // );

    openDialog(cards:any) {
      // console.log(cards);
      this.shared.setData(cards);
      this.dialog.open(AddUserComponent, {
        data: cards
      });
      // return cards;
    }

    // cardData: Data1[] = [];
  
    // ngOnInit(): void {
    //   // this.shared.setData(this.message);
    // }
  
    dataJson = data;
    displayedColoums1: string[] = ['id', 'name', 'gender','class','seat','club','persona','crush','strength','hairstyle','color','eyes','info'];
      // return cards;
}