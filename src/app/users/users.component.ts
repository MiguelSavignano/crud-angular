import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
})
export class UsersComponent {
  title = 'app-example';
  items = ['manzana', 'pera', 'platano'];
  usuarios: any = [];
  nuevoUsuarioNombre = new FormControl('');

  @Input()
  set id(id: string) {
    console.log({id})
  }

  agregarItem(item: string) {
    this.items.push(item);
  }

  quitarItem() {
    this.items.pop();
  }

  guardarUsuario() {
    this.usuarios.push({
      nombre: this.nuevoUsuarioNombre.value || '',
    });
  }
}
