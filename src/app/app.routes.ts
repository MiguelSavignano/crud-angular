import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { TrabajadoresComponent } from './trabajadores/trabajadores.component';

export const routes: Routes = [
  { path: 'users', component: UsersComponent },
  { path: 'trabajadores', component: TrabajadoresComponent },
];
