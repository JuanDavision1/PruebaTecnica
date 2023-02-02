import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaComponent } from './pages/tabla/tabla.component';
import { ErrorComponent } from './pages/error/error.component';
import { CrearComponent } from './components/crear/crear.component';
import { ModificarComponent } from './components/modificar/modificar.component';

const routes: Routes = [
  {
    path:'',
    children:[
      {
        path:'tablas',
        component:TablaComponent,
        children:[
          {
            path:'crear',
            component:CrearComponent
          },
          {
            path:'modificar',
            component:ModificarComponent
          },
        ]
      },
      {
        path:'error',
        component:ErrorComponent
      }
 
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PruebaRoutingModule { }
