import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear',
  templateUrl: './crear.component.html',
  styleUrls: ['./crear.component.css']
})
export class CrearComponent {
miform: FormGroup = this.fb.group({
  id:['',[Validators.required,Validators.minLength(1)]],
  id_user:['',[Validators.required,Validators.minLength(1)]],
  title:[' ',Validators.required],
  body:[' ',Validators.required],
})
constructor(private fb:FormBuilder){}
@Output() newItemEvent = new EventEmitter<string[]>();
guardar(){
console.log(this.miform.value)
this.newItemEvent.emit(this.miform.value)
//this.miform.reset()
}
}
