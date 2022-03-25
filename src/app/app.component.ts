import {Component} from '@angular/core';

export type Post = {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'todolist'

  onAddPost(post: Post) {
    this.posts.unshift(post)
  }

  posts: Post[] = [
    {title: 'JS', text: 'I want to learn JavaScript', id: 1},
    {title: 'Angular', text: 'I like programming process with Angular', id: 2},
  ]
}
