import { Injectable } from '@angular/core';

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

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor() { }
  cards: Data[] = [];

  setData(data: Data[]) {
    this.cards = data;
  }

  getData() {
    return this.cards;
  }
}
