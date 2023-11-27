// 1. Run json server for todos. Endpoint should be "todos" which will be array of objects and object itself should have task and completed properties

// 2. Add 5 todo objects to "todos" endpoint

// async function addTodo(newTodo) {
//   try {
//     const response = await fetch("http://localhost:3000/todos", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(newTodo),
//     });
//     if (!response.ok) {
//       throw new Error("Failed to add todo");
//     }
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// addTodo({ task: "prepare for exams", completed: true });
// addTodo({ task: "prepare for quiz", completed: false });
// addTodo({ task: "random", completed: false });
// addTodo({ task: "z33242", completed: false });
// addTodo({ task: "fwefewfewfw for quiz", completed: true });

// 3. Change one todo and make it completed

// async function completeTodo(id) {
//   try {
//     const response = await fetch(`http://localhost:3000/todos/${id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         completed: true,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to update to");
//     }
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// completeTodo(4);

// 4. Delete all the todos that are already completed

async function getCompletedTodos() {
  try {
    const response = await fetch("http://localhost:3000/todos");

    if (!response.ok) throw new Error("Failed to fetch data");

    const todos = await response.json();

    return todos.filter((todo) => todo.completed);
  } catch (error) {
    console.log(error.message);
  }
}

async function deleteTodo() {
  try {
    const completedTodos = await getCompletedTodos();

    if (completedTodos.length === 0)
      throw new Error("No such object with completed: true");

    completedTodos.map(async (todo) => {
      const response = await fetch(`http://localhost:3000/todos/${todo.id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete todo");
    });
  } catch (error) {
    console.log(error.message);
  }
}

deleteTodo();
