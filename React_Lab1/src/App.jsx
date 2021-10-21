import { Todo } from "./componants/Todo.jsx";


export const App = () => {

  const todos = [
    { title: "study", details: "study3 hours on the morning" },
    { title: "running", details: "go to run 3 KMs on the morning" },
  ];
  
  return todos.map((item) =>
    <Todo title={item.title} details={item.details} />
  );

};
