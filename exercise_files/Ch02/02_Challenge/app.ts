enum TodoStatus { // define enumerable type
  Done = "done",
  Todo = "todo",
  InProgress = "in-progress",
}

interface todoItem {
  id: number;
  title: string;
  status: TodoStatus;
  completedOn?: Date; // make it optional
}

const todoItems: todoItem[] = [
  // specify type for our todoItems array
  {
    id: 1,
    title: "Learn HTML",
    status: TodoStatus.Done,
    completedOn: new Date("2021-09-11"),
  },
  { id: 2, title: "Learn TypeScript", status: TodoStatus.InProgress },
  { id: 3, title: "Write the best app in the world", status: TodoStatus.Todo },
];

function addTodoItem(todo: string): todoItem {
  const id = getNextId(todoItems);

  const newTodo = {
    id,
    title: todo,
    status: TodoStatus.Todo,
  };

  todoItems.push(newTodo);

  return newTodo;
}

// Add a generic constraint that says that any one of these parameters must be an object with a property called ID of type number -> T extends { id: number }
function getNextId<T extends { id: number }>(items: T[]): number {
  return items.reduce((max, x) => (x.id > max ? x.id : max), 0) + 1;
}

const newTodo = addTodoItem(
  "Buy lots of stuff with all the money we make from the app"
);

console.log(JSON.stringify(newTodo));
