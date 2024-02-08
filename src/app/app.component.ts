import { Component } from '@angular/core';
import { todoList } from './todoList';
import { TodoItem } from './todoItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo';
  private list = new todoList("Bob", [
    new TodoItem("Floss", true),
    new TodoItem("Bring out garbage"),
    new TodoItem("Collect tickets"),
  ]);

  get username(): string {
    return this.list.user;
  }

  get itemCount() : number {
    return this.list.items
    .filter(item => !item.complete).length;
  }

}
