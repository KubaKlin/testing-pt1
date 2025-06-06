export function countCompletedTodos(todos) {
  return todos.reduce((result, todo) => {
    if (todo.completed) {
      return result + 1;
    }
    return result;
  }, 0);
}
