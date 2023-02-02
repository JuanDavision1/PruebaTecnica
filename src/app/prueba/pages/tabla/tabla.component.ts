import { Component } from '@angular/core';
import { PruebaService } from '../../services/prueba.service';
import { TipadoServ } from '../../interfaces/tipado.interfaces';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  modalswitch:boolean = false;
  modalswitchdos:boolean=false;
  datos:TipadoServ[]=[];
  data:TipadoServ={
    userId: 0,
    id:     0,
    title:  '',
    body:   '',
  }
constructor(private datosservice:PruebaService){}
ngOnInit(): void {
this.datosservice.getdata().subscribe(
  datos=>{this.datos = datos } 
)
  
}
borrar(id:number){
  console.log('borrado', id)
  return this.datos.splice(id,1)
  //this.datosservice.eliminardata(this.data.id).subscribe(resp=> console.log(resp))
}
abrircrear(){
  this.modalswitch=true
}
abrirmodificar(){
  this.modalswitchdos=true
}

establecerData(event:TipadoServ[]){
 this.datos =event
 console.log(this.datos)
}
}
