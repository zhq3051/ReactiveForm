/* tslint:disable:component-class-suffix */
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { states } from './data-models';

@Component(
    {
        selector: 'hero-detail5',
        templateUrl: './hero-detail5.component.html'
    }
)

export class HeroDetailComponent {
    heroForm: FormGroup;
    states = states;

    constructor(private fb: FormBuilder) {
        this.createForm();
    }

    createForm() {
        this.heroForm = this.fb.group({         // parent form group
            name: ['', Validators.required],
            address: this.fb.group({            // child form group
                street: '',
                city: '',
                state: '',
                zip: ''
            }),
            power: '',
            sidekick: ''
        });
    }
}
