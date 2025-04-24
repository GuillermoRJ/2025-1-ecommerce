import { Component, Input } from '@angular/core';
import { Item } from '../../Item';
import { GuitarsServiceService } from '../guitars-service.service';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-shopping-cart',
  imports: [ReactiveFormsModule],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent {
  @Input() guitarList: Item[] = [];

  cartItem: number[] = [];

  constructor(private guitarsServiceService: GuitarsServiceService) {}

  totalPrice: number = 0;

  ngOnInit() {
    this.loadGuitarCart();

  }

  loadGuitarCart() {
    this.cartItem = this.guitarsServiceService.getCart();
  }

  addtoCart(id:number){
    this.guitarsServiceService.addToCart(id);
    this.loadGuitarCart();
  }

  removeFromCart(id:number){
    this.guitarsServiceService.removeFromCart(id);
    this.loadGuitarCart();
  }

  checkCart(id_guitar:number){
    return this.cartItem.includes(id_guitar);
  }

}
