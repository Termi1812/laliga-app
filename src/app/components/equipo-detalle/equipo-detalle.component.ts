import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-equipo-detalle',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './equipo-detalle.component.html',
  styleUrl: './equipo-detalle.component.css'
})
export class EquipoDetalleComponent implements OnInit {

  equipo: any = null;
  clasificacion: any = null;
  partidos: any[] = [];

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.apiService.getEquipo(id).subscribe({
      next: (data) => { this.equipo = data; this.cdr.detectChanges(); }
    });

    this.apiService.getClasificacionEquipo(id).subscribe({
      next: (data) => { this.clasificacion = data; this.cdr.detectChanges(); }
    });

    this.apiService.getPartidosProximos(id).subscribe({
      next: (data) => { this.partidos = data; this.cdr.detectChanges(); }
    });
  }
}