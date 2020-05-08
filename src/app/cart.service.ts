import { Injectable } from '@angular/core';

import { AngularFireFunctions } from '@angular/fire/functions';
import { ConstantPool } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor(
    private fns: AngularFireFunctions
  ) {}

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    const shippingPrices = this.fns.httpsCallable('getShippingPrices');
    return shippingPrices({}).toPromise() ;
  }

}
