import { ChangeDetectionStrategy, Component, signal  } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-hero-page',
  imports: [TitleCasePipe],
  templateUrl: './hero-page.component.html',
  styleUrl: './hero-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroPageComponent {

  name = signal('Ironman');
  age = signal(45);


  getHeroDescription() {
    return `${this.name()} - ${this.age()}`;
  }

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
