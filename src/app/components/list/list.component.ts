import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../../../services/pokemon.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  pokemons: any;

  constructor(
    private pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
    this.pokemonService.getAllPokemon().subscribe(data => {
      // this.pokemons = JSON.stringify(data);
      this.pokemons = data;
    })
  }

}
