import { countCompletedTodos } from './countCompletedTodos';

describe('countCompletedTodos function', () => {
  describe('when provided with an array of todos', () => {
    describe('and all todos are completed', () => {
      it('should return the total number of todos', () => {
        const todos = [
          { id: 1, title: 'Task 1', completed: true },
          { id: 2, title: 'Task 2', completed: true },
          { id: 3, title: 'Task 3', completed: true }
        ];

        const result = countCompletedTodos(todos);
        expect(result).toBe(3);
      });
    });

    describe('and no todos are completed', () => {
      it('should return 0', () => {
        const todos = [
          { id: 1, title: 'Task 1', completed: false },
          { id: 2, title: 'Task 2', completed: false },
          { id: 3, title: 'Task 3', completed: false }
        ];

        const result = countCompletedTodos(todos);
        expect(result).toBe(0);
      });
    });

    describe('and some todos are completed', () => {
      it('should return the correct count of completed todos', () => {
        const todos = [
          { id: 1, title: 'Task 1', completed: true },
          { id: 2, title: 'Task 2', completed: false },
          { id: 3, title: 'Task 3', completed: true },
          { id: 4, title: 'Task 4', completed: false },
          { id: 5, title: 'Task 5', completed: true }
        ];
        
        const result = countCompletedTodos(todos);
        expect(result).toBe(3);
      });
    });

    describe('and the array is empty', () => {
      it('should return 0', () => {
        const todos = [];
        
        const result = countCompletedTodos(todos);
        expect(result).toBe(0);
      });
    });

    describe('and todos have truthy/falsy completed values', () => {
      it('should handle various truthy/falsy values correctly', () => {
        const todos = [
          { id: 1, title: 'Task 1', completed: true },
          { id: 2, title: 'Task 2', completed: false },
          { id: 3, title: 'Task 3', completed: 1 },
          { id: 4, title: 'Task 4', completed: 0 },
          { id: 5, title: 'Task 5', completed: 'yes' },
          { id: 6, title: 'Task 6', completed: '' },
          { id: 7, title: 'Task 7', completed: null },
          { id: 8, title: 'Task 8', completed: undefined }
        ];
        
        const result = countCompletedTodos(todos);
        expect(result).toBe(3);
      });
    });
  });

  describe('when checking if the original array is not mutated', () => {
    it('should not mutate the original todos array', () => {
      const originalTodos = [
        { id: 1, title: 'Task 1', completed: true },
        { id: 2, title: 'Task 2', completed: false }
      ];
      const todosClone = originalTodos;
      
      countCompletedTodos(originalTodos);
      
      expect(originalTodos).toEqual(todosClone);
      expect(originalTodos.length).toBe(todosClone.length);
    });
  });
});
