import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { TipadoServ } from '../../interfaces/tipado.interfaces';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent {
  miform: FormGroup = this.fb.group({
    id:['',[Validators.required,Validators.minLength(1)]],
    id_user:['',[Validators.required,Validators.minLength(1)]],
    title:[' ',Validators.required],
    body:[' ',Validators.required],
  })
  constructor(private fb:FormBuilder){}
  @Output() newItemEvent:EventEmitter<TipadoServ[]> = new EventEmitter<TipadoServ[]>();
  guardar(){
  console.log(this.miform.value)
  this.newItemEvent.emit(this.miform.value)
  this.miform.reset()
  }
}
