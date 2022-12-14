import { Component, Input, OnInit } from '@angular/core';
import { Menu } from '../../menu.sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['sidebar.component.scss']
})
export class SidebarComponent implements OnInit{
  

    @Input() menu: {
        id: number;
        name: string;
        promo: string;
        price: number;
        icon: string;
        cat: string;
    }

    listMenuA: Menu[] = [
      {
          "id": 1,
          "name": "Combo Meal",
          "promo": "20% off",
          "price": 4.5,
          "icon": "sandwich.svg",
          "count":2
      },
      {
          "id": 2,
          "name": "Burgers & Sandiches",
          "promo": "",
          "price": 5,
          "icon": "birthday-cake.svg",
          "count":1
      },
      {
          "id": 3,
          "name": "Happy Meal",
          "promo": "",
          "price": 4.2,
          "icon": "burger.svg",
          "count":1
      },
      {
          "id": 4,
          "name": "McMalaise",
          "promo": "",
          "price": 4.2,
          "icon": "burger.svg",
          "count":1
      }
  ];

    constructor(){}

    ngOnInit(){
    }
}
