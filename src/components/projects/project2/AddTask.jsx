import { useRef, useState } from "react";

const AddTask = ({ tasks, setTasks }) => {
  const [isValid, setIsValid] = useState(true);
  const[taskName, setTaskName] = useState("");
  const[description, setDescription] = useState("");
  const addTask = () => {
    if (!taskName || !description) {
      setIsValid(false);
      setTimeout(() => {
        setIsValid(true);
      }, 2000);
      return;
    }

    setTasks((tasks) => [
      ...tasks,
      {
        taskName: taskName,
        description: description,
      },
    ]);
    setTaskName("");
    setDescription("");
  };
  return (
    <section className="bg-glacier-teal w-auto md:w-[50vw] mx-auto mt-10  flex-center gap-5 p-5 flex-col orange-ring">
      <h1 className="font-f2 text-3xl font-bold font-stretch-200%">
        Add New Task
      </h1>
      <input
        className="inp"
        type="text"
        name="taskname"
        placeholder="Enter Task Name : "
        value={taskName}
        onChange={(e) => {
          setTaskName(e.target.value)
        }}
      />
      <input
        className="inp"
        type="text"
        name="description"
        placeholder="Enter description : "
        value={description}
        onChange={(e) => {
          setDescription(e.target.value)
        }}
      />
      <button
        className="btn"
        onClick={() => {
          addTask();
        }}
      >
        Add Task
      </button>
      {!isValid && (
        <div className="w-[70%] bg-red-500  text-snow-white py-1 text-center ring-2 ring-penguin-black">
          Can't add empty task
        </div>
      )}
    </section>
  );
};

export default AddTask;
