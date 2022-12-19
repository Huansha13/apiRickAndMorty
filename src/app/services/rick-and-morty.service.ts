import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Character } from '../interfaces/character.interface';
import { Episode } from '../interfaces/episode.interface';

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {

  // Documentacion https://rickandmortyapi.com/
  constructor(private http: HttpClient) { }

  
  obtenerEpisodios(): Observable<Episode> {
    const url = environment.baseUrl + "/episode";
    return this.http.get<Episode>(url);
  }

  obtenerTodoPersonajes(): Observable<Character> {
    const url = environment.baseUrl + "/character";
    return this.http.get<Character>(url);
  } 
}
