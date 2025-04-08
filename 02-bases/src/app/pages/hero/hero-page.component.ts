import { ChangeDetectionStrategy, Component, computed, signal  } from '@angular/core';
import { UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-hero-page',
  imports: [UpperCasePipe],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroPageComponent {

  name = signal('Ironman');
  age = signal(45);


  heroDesctiption = computed(() => {
    return `${this.name()} - ${this.age()}`;
  })

  //getHeroDescription() {
  //  return `${this.name()} - ${this.age()}`;
  //}

  capitalizedName = computed(() => {
    return this.name().toUpperCase();
  })

  changeHero(){
    this.name.set('Spiderman')
    this.age.set(23)
  }

  changeAge(){
    this.age.set(60)
  }

  resetForm(){
    this.name.set('Ironman')
    this.age.set(45)
  }
}
