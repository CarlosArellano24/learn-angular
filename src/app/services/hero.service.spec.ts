import { TestBed } from '@angular/core/testing';
import { 
  HttpClientTestingModule,
  HttpTestingController 
} from '@angular/common/http/testing';
import { Hero } from '../hero';

import { HeroService } from './hero.service';

const mockDb = { heroes: [  
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
]};

describe('HeroService', () => {
  let service: HeroService;
  let httpController: HttpTestingController;

  let url = 'api/heroes'

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
    });
    service = TestBed.inject(HeroService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});