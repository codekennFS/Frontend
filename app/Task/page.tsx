import Task from "../../components/features/Task-Page/Task";
import "./style.css";

export default function TaskPage() {
  return (
    <>
      <div className="container">
        <h1 className="text-5xl">Welcome to the task page</h1>
        <Task />
      </div>
    </>
  );
}
