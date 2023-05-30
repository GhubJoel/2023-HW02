import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CartService } from './tabs/services/cart.service';
import { NavController } from '@ionic/angular';
import { AccountPage } from './tabs/account/account.page';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  standalone: true,
  imports: [IonicModule]
})
export class ExampleComponent {
  isModalOpen = false;

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }


}