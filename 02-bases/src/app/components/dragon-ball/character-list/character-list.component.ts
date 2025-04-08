import { Component, Input, input, signal } from '@angular/core';
import type { Character } from '../../../interfaces';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css',
})
export class CharacterListComponent {
  //@Input() characters!:Character[]; // This is the old way of doing it
  characters = input.required<Character[]>() // This is the new way of doing it
  listName = input<string>('')  

}
