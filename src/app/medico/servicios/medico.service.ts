import { Injectable } from '@angular/core';
import { Medico } from '../interfaces/medico';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from 'src/app/interfaces/api-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicoService {  

    baseUrl: string = environment.apiUrl + 'medico/';
  
    constructor(private http: HttpClient) { }
  
    lista() : Observable<ApiResponse>{
      return this.http.get<ApiResponse>(`${this.baseUrl}`);
    }
  
    crear(request: Medico) : Observable<ApiResponse>{
      return this.http.post<ApiResponse>(`${this.baseUrl}`, request);
    }
  
    editar(request: Medico) : Observable<ApiResponse>{
      return this.http.put<ApiResponse>(`${this.baseUrl}`, request);
    }
  
    eliminar(id : number) : Observable<ApiResponse>{
      return this.http.delete<ApiResponse>(`${this.baseUrl}${id}`);
    }

}
