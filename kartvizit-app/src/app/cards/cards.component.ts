import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls:[ './cards.component.scss']
})
export class CardsComponent implements OnInit {

  cardItem={
    title: 'Developer',
    name: 'SbryCbc',
    phone: '55555555',
    email: 'sbrycbc@gmail.com',
    address: '123 Main St'
  };
  
  constructor() { }
  ngOnInit(): void { }
}


