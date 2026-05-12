import { inject,Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  private apiUrl = environment.apiUrl;
  constructor() {}

  getClasificacion(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/clasificacion/tabla`);
  }
    getPartidos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/partidos/proximos`);
  }

  getResultados(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/partidos/resultados`);
  }
  getEquipos(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/equipos`);
  }
  getEquipo(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/equipos/${id}`);
  }

  getClasificacionEquipo(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/clasificacion/equipo/${id}`);
  }

  getPartidosEquipo(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/partidos/equipo/${id}`);
  }
}