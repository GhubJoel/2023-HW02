import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
import { FoodService } from '../services/food.service';
import { Food } from '../shared/food';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSort } from '@angular/material/sort';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CartPage } from '../cart/cart.page';
import { NavController } from '@ionic/angular';
import { CartService } from '../services/cart.service';
import { UserService } from '../services/user.service';
import { ModalController } from '@ionic/angular';
import { HelpmodalComponent } from '../../helpmodal.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { User } from '../shared/user';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule,MatSlideToggleModule,MatTableModule,MatFormFieldModule,MatButtonModule,MatIconModule,RouterModule, ReactiveFormsModule,],
})

export class AccountPage implements OnInit {
  order: any[] = [];
  items: any
  users: User[];
  editForm: FormGroup;
  constructor(private foodService: FoodService, private router: Router, private navController: NavController, private cartService: CartService, private userService: UserService, private orderService : OrderService, private modalController: ModalController, private formBuilder: FormBuilder) 
  { 
    const order = this.orderService.getOrder();
    this.order = order.items;
    this.users = this.userService.getUsers();
    this.editForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]]
    });
  }

  onEdit(user: User) {
      this.editForm.patchValue({
        id: user.id,
        name: user.name,
        email: user.email,
        phone: user.phone
      });
  }

  onSubmit() {
    console.log("Submitted")
    const formData = this.editForm.value;
    console.log(formData);
    const userIndex = this.users.findIndex(user => user.id === formData.id);
    console.log('user index:', userIndex);
    if (userIndex >= 0) {
      const updatedUser = {
        ...this.users[userIndex],
        name: formData.name,
        email: formData.email,
        phone: formData.phone
      };
      console.log('updated user:', updatedUser);
      this.users[userIndex] = updatedUser;
      this.userService.saveUsers(this.users);
      console.log([userIndex])
      console.log('user list after save:', this.userService.getUsers());
    }
  
  }

  ngOnInit() {
    this.items = this.orderService.getOrder();
    const order = this.orderService.getOrder();
  }

  clearOrder(){
    this.orderService.clearOrder();
  }

  async openHelpModal() {
    const modal = await this.modalController.create({
      component: HelpmodalComponent,
      componentProps: {
        message: ' Welcome to the help page : Please read throught this if you are having any issues.'
      }
    });
    return await modal.present();
  }
  
}
