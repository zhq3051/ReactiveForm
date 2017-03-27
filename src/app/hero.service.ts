import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';  // of using 1
import { of } from 'rxjs/observable/of'; // of using 2

import 'rxjs/add/operator/delay';

import { Hero, heroes } from './data-models';



@Injectable()
export class HeroService {
  delayMs = 500;

  constructor() { }

  // fake server get;
  getHeroes(): Observable<Hero[]> {
    return Observable.of<Hero[]>(heroes).delay(this.delayMs); // simulate latency with delay
    // return of(heroes).delay(this.delayMs);
}

  updateHero(hero: Hero): Observable<Hero> {
    const oldHero = heroes.find(h => h.id === hero.id);
    const newHero = Object.assign(oldHero, hero);
    return of(newHero).delay(this.delayMs);
  }

}
