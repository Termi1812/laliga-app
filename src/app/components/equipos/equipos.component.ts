import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-equipos',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './equipos.component.html',
  styleUrl: './equipos.component.css'
})
export class EquiposComponent implements OnInit {

  equipos: any[] = [];

  constructor(private apiService: ApiService, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.apiService.getEquipos().subscribe({
      next: (data) => {
        this.equipos = data;
        this.cdr.detectChanges();
      },
      error: (err) => console.error('Error:', err)
    });
  }
}