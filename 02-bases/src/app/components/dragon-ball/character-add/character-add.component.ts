import { Component, EventEmitter, Input, input, Output, output, signal } from '@angular/core';
import type { Character } from '../../../interfaces';

@Component({
  selector: 'dragonball-character-add',
  imports: [],
  templateUrl: './character-add.component.html',
  styleUrl: './character-add.component.css',
})
export class CharacterAddComponent {
  name = signal<string>('anacleto');
  power = signal<number>(4000);
  
  //@Output() newCharacter = new EventEmitter<Character>(); // Forma antigua
  newCharacter = output<Character>(); // Forma nueva

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
