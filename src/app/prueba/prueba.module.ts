import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablaComponent } from './pages/tabla/tabla.component';
import { ErrorComponent } from './pages/error/error.component';
import { PruebaRoutingModule } from './prueba-routing.module';
import { CrearComponent } from './components/crear/crear.component';
import { ModificarComponent } from './components/modificar/modificar.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TablaComponent,
    ErrorComponent,
    CrearComponent,
    ModificarComponent
  ],
  imports: [
    CommonModule,
    PruebaRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PruebaModule { }
