import { Component, computed, inject, signal } from '@angular/core';
import { Character } from '../../interfaces';
import { CharacterListComponent } from '../../components/dragon-ball/character-list/character-list.component';
import { CharacterAddComponent } from '../../components/dragon-ball/character-add/character-add.component';
import { DragonBallService } from '../../services/dragonball.service';

@Component({
  selector: 'dragonball-super-page',
  imports: [ CharacterListComponent, CharacterAddComponent],
  templateUrl: './dragonball-super-page.component.html',
  styleUrl: './dragonball-super-page.component.css',
})
export class DragonballSuperPageComponent {

  // Inyección Tradicional
  //constructor(
  //  public dragonballService: DragonBallService
  //){}

  // Inyección por Signal
  public dragonballService = inject(DragonBallService);



  characters = signal<Character[]>([{ id: 1, name: 'Goku', power: 9000 }]);

  addCharacter($newCharacter:Character) {
    this.characters.update((current) => {
      return [...current, $newCharacter];
    });
  }
}
