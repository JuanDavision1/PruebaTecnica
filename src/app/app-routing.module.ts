import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaComponent } from './prueba/pages/tabla/tabla.component';

const routes: Routes = [
  {
    path:'principal',
    loadChildren:()=>import('./prueba/prueba.module').then(m=>m.PruebaModule)
  },
  {
    path:'**',
    redirectTo:'principal'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
