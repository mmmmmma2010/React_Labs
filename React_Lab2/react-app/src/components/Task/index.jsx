import { Card } from "../Card";

export const Task = (props) => {
  const del = () => {
    props.onDelete(props.index);
  };
  return (
    <Card>
      <div>
        <h4>{props.title}</h4>
        <p>{props.body}</p>
        <button className="btn btn-danger m-2" onClick={del}>
          delete
        </button>
      </div>
    </Card>
  );
};
