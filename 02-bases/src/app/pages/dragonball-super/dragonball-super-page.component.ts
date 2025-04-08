import { Component, computed, signal } from '@angular/core';
import { Character } from '../../interfaces';
import { CharacterListComponent } from '../../components/dragon-ball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/dragon-ball/character-add/character-add.component';

@Component({
  selector: 'dragonball-super-page',
  imports: [ CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css',
})
export class DragonballSuperPageComponent {

  characters = signal<Character[]>([{ id: 1, name: 'Goku', power: 9000 }]);

  addCharacter($newCharacter:Character) {
    this.characters.update((current) => {
      return [...current, $newCharacter];
    });
  }
}
