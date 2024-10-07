import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardModelComponent } from './card-model/card-model.component';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls:['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  cardItem={
    title: 'Developer',
    name: 'SbryCbc',
    phone: '55555555',
    email: 'sbrycbc@gmail.com',
    address: '123 Main St'
  };
  
  constructor(
    public dialog:MatDialog ) { }

  ngOnInit(): void { }

  openAddCardModel() {
    this.dialog.open(CardModelComponent, {
      width:'400px'
    });
  }
}


