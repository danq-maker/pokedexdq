import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent {
  @Input() imageURL: string = "";
  @Output() pokemonId: EventEmitter<number> = new EventEmitter();

  previousPokemon(): void {
    this.pokemonId.emit(-1);
  }

  nextPokemon(): void {
    this.pokemonId.emit(1);
  }
}