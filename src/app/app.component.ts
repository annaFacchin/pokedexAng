import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class Pokedex {
  constructor(
    public pkmnId: number,
    public name: string,
  ) { }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  // api: string = 'https://pokeapi.co/api/v2/pokemon/?limit=' + limit + '&offset=' + offset;
  api: string = 'https://pokeapi.co/api/v2/pokemon/?limit=10&offset=10';
  data = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    const promise = new Promise((resolve, reject) => {
      const apiURL = this.api;
      this.http
        .get<Pokedex[]>(apiURL)
        .toPromise()
        .then((res: any) => {
          // Success
          this.data = res.map((res: any) => {
            return new Pokedex(
              res.pkmnId,
              res.name
            );
          });
          resolve();
        },
          err => {
            // Error
            reject(err);
          }
        );
    });
    return promise;
  }

}
