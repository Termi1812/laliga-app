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
}