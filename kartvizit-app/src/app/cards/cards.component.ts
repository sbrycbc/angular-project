import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CardModelComponent } from './card-model/card-model.component';
import { CardService } from '../services/card.service';
import { Card } from '../models/card';

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
  cards!: Card[];
  
  constructor(
    public dialog:MatDialog,
    private cardService: CardService ) { }

  ngOnInit(): void { 
    this.getCards();
  }

  openAddCardModel() {
    this.dialog.open(CardModelComponent, {
      width:'400px'
    });
  }

  getCards(){
    this.cardService.getCards()
    .subscribe( (res: Card[]) => {
      this.cards = res;
    })
  }
}


