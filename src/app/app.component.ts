import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todolist';

  arr = [1, 1, 2, 3, 5, 7, 13]

  obj = [
    {name: 'Ilya', age: 25, friends: ['Ilya', 'Nikita', 'Max', 'Artem']},
    {name: 'Max', age: 30, friends: ['Ilya', 'Nikita', 'Dima', 'Artem']}
  ]
}
