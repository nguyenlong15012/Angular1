import { Component } from '@angular/core';

@Component({
  selector: 'hello-world',
  standalone: true,
  imports: [],
  templateUrl: './hello-world.component.html',
  styleUrl: './hello-world.component.css',
})
export class HelloWorldComponent {
  message: string = 'Welcome to Angular!';
}
