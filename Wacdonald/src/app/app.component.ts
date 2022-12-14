import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Menu } from './menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent implements OnInit{
 
  constructor(){}

  listMenuA: Menu[] = [
    {
        "id": 1,
        "name": "Combo Meal",
        "promo": "20% off",
        "price": 4.5,
        "icon": "sandwich.svg",
        "cat": "menu"
    },
    {
        "id": 2,
        "name": "Burgers & Sandiches",
        "promo": "",
        "price": 5,
        "icon": "birthday-cake.svg",
        "cat": "menu"
    },
    {
        "id": 3,
        "name": "Happy Meal",
        "promo": "",
        "price": 4.2,
        "icon": "burger.svg",
        "cat": "menu"
    },
    {
        "id": 4,
        "name": "Beverages",
        "promo": "",
        "price": 2,
        "icon": "burger.svg",
        "cat": "menu"
    },
    {
        "id": 5,
        "name": "Chicken",
        "promo": "",
        "price": 4,
        "icon": "chicken-leg.svg",
        "cat": "menu"
    },
    {
        "id": 6,
        "name": "Snack & Sides",
        "promo": "",
        "price": 4,
        "icon": "chicken-leg.svg",
        "cat": "menu"
    }
];

  listMenuB: Menu[] = [
    {
        "id": 7,
        "name": "Big Meal",
        "promo": "",
        "price": 4.5,
        "icon": "burger.svg",
        "cat": "product"
    },
    {
        "id": 8,
        "name": "Quarter Pounder",
        "promo": "",
        "price": 5,
        "icon": "hot-dog.svg",
        "cat": "product"
    },
    {
        "id": 9,
        "name": "Cheeseburger",
        "promo": "",
        "price": 4.2,
        "icon": "pizza.svg",
        "cat": "product"
    },
    {
      "id": 10,
      "name": "Crispy Chicken",
      "promo": "",
      "price": 2,
      "icon": "chicken-leg.svg",
      "cat": "menu"
    },
    {
        "id": 11,
        "name": "Sausage sausage",
        "promo": "",
        "price": 4,
        "icon": "birthday-cake.svg",
        "cat": "product"
    },
    {
        "id": 12,
        "name": "Filet-o-Fish",
        "promo": "",
        "price": 4,
        "icon": "roast-chicken.svg",
        "cat": "product"
    }
];

menuList$: Observable<Menu[]> = of(this.listMenuA).pipe(delay(1000));
menuList: Menu[];

ngOnInit(){
  this.menuList$.subscribe((menuList) => (this.menuList = menuList));
}

}
