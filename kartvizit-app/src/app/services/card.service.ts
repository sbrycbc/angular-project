import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Card } from '../models/card';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(
    @Inject('apiUrl') private apiUrl: string,
    private http: HttpClient
  ) {}

  // Get all cards
  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.apiUrl + '/cards');
  }



addCard(card: Card){
  return this.http.post(this.apiUrl + '/cards',card)
}


}
