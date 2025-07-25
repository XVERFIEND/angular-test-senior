import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})

/*
  things i'd add with more time/in future:
  1. more unit testing.
  2. more specialised components (buttons, inputs, etc...).
  3. themeing (dark mode).
  4. linting. there's a conflict with the current version of
      ngrx so i was unable to get it working in time.
*/

export class App {}
