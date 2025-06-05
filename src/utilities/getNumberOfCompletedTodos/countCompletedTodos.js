export function countCompletedTodos(todos) {
  return todos.reduce((result, todo) => {
    if (todo.completed) {
      return numberOfCompletedTodos + 1;
    }
    return numberOfCompletedTodos;
  }, 0);
}
