import { Component, signal } from "@angular/core";


@Component({
  templateUrl: './counter-page.component.html',
})

export class CounterPageComponent {
  public counter: number = 10;
  counterSignal = signal(10)

  public increaseBy(value: number): void {
    this.counter += value;
  }

  public resetCounter(): void {
    this.counter = 10;
  }

  // Signals
  public increaseBySignal(value: number): void {
    //Forma 1
    // this.counterSignal.set(this.counterSignal() + value);

    //Forma 2
    this.counterSignal.update((current) => current + value);
  }

  public resetSignalCounter(){
    this.counterSignal.set(10);
  }


}