import { Todo } from './todo';

export interface TodoDataServiceInterface {
  lastId: number;
  todos: Todo[];
  addTodo(todo: Todo): TodoDataServiceInterface;
  deleteTodoById(id: number): TodoDataServiceInterface;
  updateTodoById(id: number, values: Object): Todo;
  getAllTodos(): Todo[];
  getTodoById(id: number): Todo;
  toggleTodoComplete(todo: Todo);
}
