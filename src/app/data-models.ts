export class Hero {
    id = 0;
    name = '';
    power = '';
    addresses: Address[];
}

export class Address {
    street = '';
    city = '';
    state = '';
    zip = '';
}

export const heroes: Hero[] = [
    {
        id: 1,
        name: 'Whirlwind',
        power: 'strength',
        addresses: [
            { street: '123 Main', city: 'Anywhere', state: 'CA', zip: '94801' },
            { street: '456 Maple', city: 'Somewhere', state: 'VA', zip: '23226' },
        ]
    },
    {
        id: 2,
        name: 'Bombastic',
        power: 'strength',
        addresses: [
            { street: '789 Elm', city: 'Smallville', state: 'OH', zip: '04501' },
        ]
    },
    {
        id: 3,
        power: '',
        name: 'Magneta',
        addresses: []
    },
];

export const states = ['CA', 'MD', 'OH', 'VA'];
