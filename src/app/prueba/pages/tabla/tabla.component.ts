import { Component } from '@angular/core';
import { PruebaService } from '../../services/prueba.service';
import { TipadoServ } from '../../interfaces/tipado.interfaces';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {

  public modalswitch: boolean = false;
  public modalswitchdos: boolean = false;
  public datos: TipadoServ[] = [];
  public data: TipadoServ = {
    userId: 0,
    id:     0,
    title:  '',
    body:   '',
  };

  constructor(private datosservice:PruebaService){}

  ngOnInit(): void {
    // Get Data
    this.datosservice.getdata()
      .subscribe( (datos)=> { 
        this.datos = datos
      });
    
    if(localStorage.getItem('nuevo')) {
      this.datos.unshift(JSON.parse('nuevo'));
    }    
  }

  borrar(id: number): TipadoServ[] {
    console.log('borrado', id);
    return this.datos.splice(id, 1);
    //this.datosservice.eliminardata(this.data.id).subscribe(resp=> console.log(resp))
  }

  abrircrear(): void{
    this.modalswitch = true;
  }
  abrirmodificar(): void{
    this.modalswitchdos = true;
  }

  establecerData(event: TipadoServ): void {
    // Pruebelo voy
    this.datos.unshift(event);
    this.datosservice.agregardata(this.datos)
      .subscribe( (resp) => {
    localStorage.setItem('nuevo', JSON.stringify(resp));
    console.log('Respuesta', resp)});
  }
}
