import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Game } from '../../services/games.service';

@Component({
  selector: 'app-games',
  standalone: false,
  templateUrl: './games.component.html',
  styleUrl: './games.component.css'
})
export class GamesComponent implements OnInit {

  private readonly apiUrl = 'http://localhost:8081/games';

  games: Game[] = [];
  form: Game = this.emptyGame();
  editingId: number | null = null;
  loading = false;
  error = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadGames();
  }

  loadGames(): void {
    this.loading = true;
    this.error = '';

    this.http.get<Game[]>(this.apiUrl).subscribe({
      next: (games) => {
        this.games = games;
        this.loading = false;
      },
      error: () => {
        this.error = 'No se pudieron cargar los juegos.';
        this.loading = false;
      }
    });
  }

  submit(): void {
    const request = this.editingId === null
      ? this.http.post<Game>(this.apiUrl, this.form)
      : this.http.put<Game>(`${this.apiUrl}/${this.editingId}`, this.form);

    request.subscribe({
      next: () => {
        this.resetForm();
        this.loadGames();
      },
      error: () => {
        this.error = 'No se pudo guardar el juego.';
      }
    });
  }

  edit(game: Game): void {
    this.editingId = game.id ?? null;
    this.form = { ...game };
  }

  remove(id?: number): void {
    if (id === undefined) {
      return;
    }

    this.http.delete<void>(`${this.apiUrl}/${id}`).subscribe({
      next: () => this.loadGames(),
      error: () => {
        this.error = 'No se pudo eliminar el juego.';
      }
    });
  }

  cancel(): void {
    this.resetForm();
  }

  private resetForm(): void {
    this.form = this.emptyGame();
    this.editingId = null;
  }

  private emptyGame(): Game {
    return {
      title: '',
      description: '',
      price: 0
    };
  }

}
