import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-grafico',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './graficos.component.html',
  styleUrls: ['./graficos.component.css']
})
export class GraficoComponent {
  @Input() id: string = '';
  @Input() nombrePokemon: string = '';
  @Input() tipoPokemon: string = '';
  @Input() vidaPokemon: number = 1;
  @Input() ataquePokemon: number = 1;
  @Input() defensaPokemon: number = 1;
  @Input() velocidadPokemon: number = 1;
  @Input() pesoPokemon: number = 1; 
}
