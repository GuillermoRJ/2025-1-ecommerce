import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Item } from '../Item';
import { GuitarsServiceService} from './guitars-service.service'
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
@Component({
  selector: 'app-root',
  imports: [HeaderComponent,ShoppingCartComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ecommerce';

  myGuitarList: Item[] = [];

  //inyect service
  constructor(private guitarServiceService:GuitarsServiceService){
  }

  ngOnInit(){
    this.loadGuitars();
  }

  loadGuitars(){
    this.myGuitarList= this.guitarServiceService.getGuitars();
  }

}
