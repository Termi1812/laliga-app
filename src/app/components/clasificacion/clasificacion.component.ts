import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-clasificacion',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './clasificacion.component.html',
  styleUrl: './clasificacion.component.css'
})
export class ClasificacionComponent implements OnInit {

  clasificacion: any[] = [];

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
  }

  getClaseCompeticion(posicion: number): string {
    if (posicion <= 4) return 'champions';
    if (posicion <= 6) return 'europa';
    if (posicion === 7) return 'conference';
    if (posicion >= 18) return 'descenso';
    return '';
  }
}