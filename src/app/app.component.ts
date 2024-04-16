import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-example';
  items = ['manzana', 'pera', 'platano'];

  agregarItem(item: string) {
    this.items.push(item)
  }

  quitarItem() {
    this.items.pop()
  }
}
