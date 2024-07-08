import { Routes } from '@angular/router';
import { MainPage } from './pages/main/main.page';
import { CreateProductPage } from './pages/create-product/create-product.page';
import { ProductsPage } from './pages/products/products.page';
import { NotFoundPage } from './pages/not-found/not-found.page';
import { FilterProductsPage } from './pages/filter-products/filter-products.page';

export const routes: Routes = [
  { path: '', component: MainPage },
  { path: 'products', component: ProductsPage },
  { path: 'create-product', component: CreateProductPage },
  { path: 'filter-products', component: FilterProductsPage },
  { path: '**', component: NotFoundPage },
];
