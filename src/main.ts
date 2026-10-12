import { Component, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { ProductsComponent } from './app/products-component/products-component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductsComponent],
  template: `<app-products-component></app-products-component>`,
})
export class App {
  name = 'Angular';
  counter = signal(0);
}

bootstrapApplication(App);
