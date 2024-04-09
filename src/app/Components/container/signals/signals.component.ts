import { Component, computed, effect, signal } from '@angular/core';
import { User } from '../../../Models/User';

@Component({
  selector: 'app-signals',
  standalone: true,
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.css'
})
export class SignalsComponent {
  counter = signal(0);
  message = signal<string[]>([]);
  doubleCounter = computed(() => this.counter() * 2);

  constructor() {
    effect(()=> console.log("Effect"));
        
  }
  increment(){
    this.counter.update(value => value + 1);
    //this.message.mutate((prevMessage)=> prevMessage.push('Hello'));

  }

  decrement(){
    this.counter.update(value => value -1);
  }
}
