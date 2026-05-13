import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';
import { TEXTOS } from '../../constants/textos';

@Component({
  selector: 'app-clasificacion',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './clasificacion.component.html',
  styleUrl: './clasificacion.component.css'
})
export class ClasificacionComponent implements OnInit {

  clasificacion: any[] = [];
  temporadaActual: any = null;
  textos = TEXTOS;

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.apiService.getClasificacion().subscribe({
      next: (data) => {
        this.clasificacion = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error:', err);
      }
    });
    this.apiService.getTemporadaActual().subscribe({
      next: (data) => {
        this.temporadaActual = data;
        this.cdr.detectChanges();
        console.log('Temporada actual:', data);
      }
    });
  }

  getClaseCompeticion(posicion: number): string {
    if (posicion <= 5) return 'champions';
    if (posicion <= 7) return 'europa';
    if (posicion === 8) return 'conference';
    if (posicion >= 18) return 'descenso';
    return '';
  }
}