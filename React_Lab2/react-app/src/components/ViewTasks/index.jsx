import { Task } from "../Task";


export const ViewTasks = (props) => {
  // const handleDelete= (i)=>{
  //   // props.onDelete(i);
  // }
  return (
    <div className="card p-2 m-2" style={{ height: "95vh" }}>
      <h1>Hello from the app</h1>
      
      {props.tasks.map((p) => {
       const i = props.tasks.findIndex(obj => obj === p)
       return <Task title={p.title} body={p.body} onDelete={props.onDelete} index = {i} />
      })}
    </div>
  );
};
