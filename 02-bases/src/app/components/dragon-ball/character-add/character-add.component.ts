import { Component, EventEmitter, Input, input, signal } from '@angular/core';
import type { Character } from '../../../interfaces';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
  styleUrl: './character-add.component.css',
})
export class CharacterAddComponent {
  name = signal<string>('');
  power = signal<number>(0);
  newCharacter = new EventEmitter<Character>();

  emitCharacter(){
    if(!this.name() || this.power() <= 0) return;

    const newCharacter: Character = {
      id: 0,
      name: this.name(),
      power: this.power(),
    }
    this.newCharacter.emit(newCharacter);
  }


}
