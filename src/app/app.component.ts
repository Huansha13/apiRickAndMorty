import { Component, OnInit } from '@angular/core';
import { Character, Result } from './interfaces/character.interface';
import { RickAndMortyService } from './services/rick-and-morty.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'apiRickAndMorty';
  responsiveOptions: any[] = [];
  personajes!: Result[];
  displayModal: boolean = false;
  episodes: string[] = [];

  constructor(private rickAndMortyService: RickAndMortyService) { }

  ngOnInit(): void {
    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];

    this.obtenerEpisodios();
    this.obtenerTodoPersonajes();
  }

  obtenerEpisodios() {
    this.rickAndMortyService.obtenerEpisodios().subscribe((data) => {
      console.log("🚀 ~ file: app.component.ts:14 ~ AppComponent ~ this.rickAndMortyService.obtenerEpisodes ~ data", data)
    })
  }

  obtenerTodoPersonajes() {
    this.rickAndMortyService.obtenerTodoPersonajes().subscribe((data) => {
      this.personajes = data?.results;
      console.log("🚀 ~ file: app.component.ts:26 ~ AppComponent ~ this.rickAndMortyService.obtenerTodoPersonajes ~ data", data)
    })
  }

  showModalDialog(episodes: string[]) {
    this.episodes = [];
    this.displayModal = true;
    this.episodes = episodes;
  }
}
