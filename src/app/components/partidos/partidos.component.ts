import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-partidos',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './partidos.component.html',
  styleUrl: './partidos.component.css'
})
export class PartidosComponent implements OnInit {

  proximos: any[] = [];
  resultados: any[] = [];
  vistaActiva = 'proximos';

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.apiService.getPartidos().subscribe({
      next: (data) => {
        this.proximos = data;
        this.cdr.detectChanges();
      }
    });

    this.apiService.getResultados().subscribe({
      next: (data) => {
        this.resultados = data;
        this.cdr.detectChanges();
      }
    });
  }
}