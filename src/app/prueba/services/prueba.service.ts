import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TipadoServ } from '../interfaces/tipado.interfaces';

@Injectable({
  providedIn: 'root',
})
export class PruebaService {
  private urlservice: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}
  getdata(): Observable<TipadoServ[]> {
   
    return this.http.get<TipadoServ[]>(this.urlservice)  ; 
  }

  eliminardata(id:number):Observable<TipadoServ>{
    return this.http.delete<TipadoServ>(`${this.urlservice}/${id}`);
  }
  agregardata(data:TipadoServ[]):Observable<TipadoServ[]>{
    return this.http.post<TipadoServ[]>(this.urlservice,data) 
  }
}
