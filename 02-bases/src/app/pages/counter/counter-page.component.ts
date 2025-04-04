import { Component } from "@angular/core";


@Component({
  templateUrl: './counter-page.component.html',
})

export class CounterPageComponent {
  public counter: number = 10;

  public increaseBy(value: number): void {
    this.counter += value;
  }

  public resetCounter(): void {
    this.counter = 10;
  }


}