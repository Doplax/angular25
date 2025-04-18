import { Component, computed, signal } from '@angular/core';
import { Character } from '../../interfaces';

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css',
})
export class DragonballPageComponent {
  name = signal('Gohan');
  power = signal(7000);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9000 },
    { id: 2, name: 'Vegeta', power: 8500 },
    { id: 3, name: 'Gohan', power: 7000 },
    { id: 4, name: 'Piccolo', power: 6000 },
    { id: 5, name: 'Krillin', power: 5000 },
    { id: 6, name: 'Bulma', power: 100 },
    { id: 7, name: 'Yamcha', power: 500 },
    { id: 8, name: 'Tien', power: 4500 },
    { id: 9, name: 'Chiaotzu', power: 3000 },
    { id: 10, name: 'Master Roshi', power: 2000 },
  ])

  addCharacter() {
    if(!this.name() || this.power() <= 0) return;

    const newCharacter: Character =         {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    }

    this.characters.update((current) => {
      return [
        ...current, newCharacter
      ]
    })
  }




  powerClass = computed(() => {
    return {
      'text-danger': true,
    }
  });

}
