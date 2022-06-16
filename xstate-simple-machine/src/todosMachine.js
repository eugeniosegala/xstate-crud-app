import { createMachine, assign } from 'xstate';

export const todosMachine = createMachine({
  context: {
    todos: [],
  },
  on: {
    ADD_TODO: {
      actions: assign({
        todos: (context, event) => [...context.todos, event.todo],
      }),
    },
  },
});
