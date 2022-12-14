import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-products',
  templateUrl: './card-products.component.html',
  styleUrls: ['card-products.component.scss']
})
export class CardProductsComponent implements OnInit{
  

    @Input() menu: {
        id: number;
        name: string;
        promo: string;
        price: number;
        icon: string;
        cat: string;
    }

    constructor(){}

    ngOnInit(){
    }
}
