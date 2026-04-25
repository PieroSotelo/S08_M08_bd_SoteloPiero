import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Game {
  id?: number;
  title: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private readonly apiUrl = 'http://localhost:8081/games';

  constructor(private http: HttpClient) {}

  getAll(): Observable<Game[]> {
    return this.http.get<Game[]>(this.apiUrl);
  }

  create(game: Game): Observable<Game> {
    return this.http.post<Game>(this.apiUrl, game);
  }

  update(id: number, game: Game): Observable<Game> {
    return this.http.put<Game>(`${this.apiUrl}/${id}`, game);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}