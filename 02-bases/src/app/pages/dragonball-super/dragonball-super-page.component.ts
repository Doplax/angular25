import { NgClass } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { Character } from '../../interfaces';
import { CharacterListComponent } from '../../components/dragon-ball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/dragon-ball/character-add/character-add.component';

@Component({
  selector: 'dragonball-super-page',
  imports: [NgClass, CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css',
})
export class DragonballSuperPageComponent {
  name = signal('');
  power = signal(0);

  characters = signal<Character[]>([{ id: 1, name: 'Goku', power: 9000 }]);

  addCharacter($event:any) {
    console.log($event);

    if (!this.name() || this.power() <= 0) return;

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((current) => {
      return [...current, newCharacter];
    });
  }

  powerClass = computed(() => {
    return {
      'text-danger': true,
    };
  });
}
