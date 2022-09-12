export class Todo {
  title!: string;
  isCompleted!: boolean;

  constructor(title: string) {
    this.title = title;
    this.isCompleted = false;
  }
}
