import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-trabajadores',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './trabajadores.component.html',
  styleUrl: './trabajadores.component.scss',
})
export class TrabajadoresComponent {
  clickEnabled = false;
  headers = ['Name', 'price', 'a']
  items = [
    { name: 'manzana', price: 12, a: "A", b: "B", c: "C"},
    { name: 'pera', price: 10, a: "A", b: "B", c: "C"},
    { name: 'platano', price: 1, a: "A", b: "B", c: "C"},
  ];

  onClickChangeTable() {
    this.clickEnabled = !this.clickEnabled;
    if(this.clickEnabled) {
      this.headers = ['Name', 'b', 'c']
    } else {
      this.headers = ['Name', 'price', 'a']
    }
  }
}
