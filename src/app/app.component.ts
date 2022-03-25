import {Component} from '@angular/core';

export type Post = {
  name: string
  text: string
  id: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todolist'

  posts: Post[] = [
    {name: 'Ilya', text: 'I want to have a work', id: 1},
    {name: 'Artem', text: 'I like programming process with React', id: 2},
  ]
}
