import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Hero, Address } from './data-models';
import { HeroService } from './hero.service';

@Component({
  selector: 'hero-detail7',
  templateUrl: './hero-detail7.component.html',
})
export class HeroDetail7Component implements OnChanges {

  @Input() hero: Hero;
  heroForm: FormGroup;
  constructor(private fb: FormBuilder, private heroesService: HeroService) {
    this.createForm();
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: '',
      secretLairs: this.fb.array([]),
      power: '',
      sidekick: ''
    })
  }

  ngOnChanges() {
    this.heroForm.reset({
      name: this.hero.name
    });
  }
}
