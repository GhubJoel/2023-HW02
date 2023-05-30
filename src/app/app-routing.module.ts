import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './pages/tabs/tabs.page';
import { NgModule } from '@angular/core';
import { CartPage } from './pages/tabs/cart/cart.page';
import { HomePage } from './pages/tabs/home/home.page';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/tabs/tabs.page').then( (m) => m.TabsPage),
    children: [
      {
        path: 'tabs',
        loadComponent: () => import('./pages/tabs/tabs.page').then( m => m.TabsPage)
        },
       {
        path: 'home',
        loadComponent: () => import('./pages/tabs/home/home.page').then( m => m.HomePage)
        },
        {
        path: 'search',
        loadComponent: () => import('./pages/tabs/search/search.page').then( m => m.SearchPage)
       },
       {
        path: 'cart',
        loadComponent: () => import('./pages/tabs/cart/cart.page').then( m => m.CartPage)
       },
       {
        path: 'account',
        loadComponent: () => import('./pages/tabs/account/account.page').then( m => m.AccountPage)
       
      },
      {
        path: 'cart/:id',
        loadComponent: () => import('./pages/tabs/cart/cart.page').then(m => m.CartPage)
      },
    ]
  },
  {
    path: '',
    redirectTo: '/pages/tabs',
    pathMatch: 'full'
  },


];



