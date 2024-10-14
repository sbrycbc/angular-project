import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Card } from '../models/card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  cards!:Card[];

  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private http: HttpClient
  ) {}

  // Get all cards
getCards(): void {
    this.http.get<Card[]>(this.apiUrl + '/cards')
    .subscribe((res:Card[]) => {
      this.cards = res;
  });
}

  // added new cards 
addCard(card: Card){
  return this.http.post(this.apiUrl + '/cards',card)
}

  // update a card
updateCard(card: Card, cardId:number){
  return this.http.put(this.apiUrl + '/cards/' + cardId, card);
}

 // delete a card
 deleteCard(cardId: number) {
  return this.http.delete(this.apiUrl + '/cards/' + cardId);
}


}
