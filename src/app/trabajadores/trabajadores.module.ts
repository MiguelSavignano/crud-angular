import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TrabajadoresComponent } from './trabajadores.component';

const routes: Routes = [
  { path: 'trabajadores', component: TrabajadoresComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class TrabajadoresModule { }
