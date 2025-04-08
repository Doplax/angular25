import { effect, Injectable, signal } from "@angular/core";
import { Character } from "../interfaces";


function loadFromLocalStorage():Character[] {
  const characters = localStorage.getItem('characters');
  return characters ? JSON.parse(characters) : [];
}

@Injectable({providedIn: 'root'}) // Provides the service in the root injector
export class DragonBallService {

  characters = signal<Character[]>(loadFromLocalStorage());

  // Este efecto se ejecuta cada vez que la señal cambia
  saveToLocalStorage = effect(()=>{
    const characters = this.characters();
    localStorage.setItem('characters', JSON.stringify(characters));
  })

  addCharacter($newCharacter:Character) {
    this.characters.update((current) => {
      return [...current, $newCharacter];
    });
  }
}

// Por si se borra la lista
//characters = signal<Character[]>([
//  { id: 1, name: 'Goku', power: 9000 },
//  { id: 2, name: 'Vegeta', power: 8500 },
//  { id: 3, name: 'Gohan', power: 7000 },
//  { id: 4, name: 'Piccolo', power: 6000 },
//  { id: 5, name: 'Krillin', power: 5000 },
//  { id: 6, name: 'Bulma', power: 100 },
//  { id: 7, name: 'Yamcha', power: 500 },
//  { id: 8, name: 'Tien', power: 4500 },
//  { id: 9, name: 'Chiaotzu', power: 3000 },
//  { id: 10, name: 'Master Roshi', power: 2000 },
//])