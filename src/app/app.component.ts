import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl,  ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-example';
  items = ['manzana', 'pera', 'platano'];
  usuarios: any = []
  nuevoUsuarioNombre = new FormControl('');

  agregarItem(item: string) {
    this.items.push(item)
  }

  quitarItem() {
    this.items.pop()
  }

  guardarUsuario() {
    this.usuarios.push({
      nombre: this.nuevoUsuarioNombre.value || ""
    })
  }
}
