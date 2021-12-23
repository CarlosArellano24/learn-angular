import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  switchMap
} from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {
  heroes$!: Observable<Hero[]>;
  private searchTerms: Subject<string> = new Subject<string>();

  constructor(private heroService: HeroService) { }

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      //ignores incoming data for 300ms until stream stabilizes
      debounceTime(300),
      // ignores new data if it's the same as previous data
      distinctUntilChanged(),
      // when new data comes through, request a serch of heroes and observe it
      switchMap((term: string) => this.heroService.searchHeroes(term))
    );
  }

}
