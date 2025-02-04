import { Component,  } from '@angular/core';
import { CardService } from '../../services/card.service';

@Component({
  selector: 'app-card-search',
  templateUrl: './card-search.component.html',
  styleUrls: ['./card-search.component.scss']
})
export class CardSearchComponent  {

  constructor(
    private _cardService: CardService
  ) { }

  search(searchText: string) :void {
    searchText = searchText.toLowerCase();
    this._cardService.filteredCards = this._cardService.cards.filter((card)=> {
      return card.title.toLowerCase().indexOf(searchText) > -1 || (card.name && card.name.toLowerCase().indexOf(searchText) > -1);
    })
  
  }

}

