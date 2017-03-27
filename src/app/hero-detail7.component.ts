import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

import { Hero, Address, states } from './data-models';
import { HeroService } from './hero.service';

@Component({
  selector: 'hero-detail7',
  templateUrl: './hero-detail7.component.html',
})
export class HeroDetail7Component implements OnChanges {

  @Input() hero: Hero;
  heroForm: FormGroup;
  nameChangeLOg: string[] = [];
  states = states;

  constructor(private fb: FormBuilder, private heroesService: HeroService) {
    this.createForm();
  }

  createForm() {
    this.heroForm = this.fb.group({
      name: '',
      secretLairs: this.fb.array([]),
      power: '',
      sidekick: ''
    });
  }

  ngOnChanges() {
    this.heroForm.reset({
      name: this.hero.name
    });
    this.setAddress(this.hero.addresses);
  }

  get secretLairs(): FormArray {
    return this.heroForm.get('secretLairs') as FormArray;
  }

  setAddress(addresses: Address[]) {
    const addressFGs = addresses.map(address => this.fb.group(address));
    const addressFormArray = this.fb.array(addressFGs);
    this.heroForm.setControl('secretLairs', addressFormArray);
  }
}
