import React from "react";

const Task = ({ taskName, description, setTasks, tasks }) => {
  return (
    <div className=" w-4/5 m-auto px-5 py-5 bg-glacier-teal/80 shadow-2xs flex-center gap-3 flex-col shadow-flipper-gray rounded-[0.5rem]">
      <h2 className="font-f2 text-2xl text-snow-white font-bold text-center font-stretch-200%">
        {taskName}
      </h2>
      <p className="text-flipper-gray text-left w-full">{description}</p>
      <button
        className="ring-1 px-2 py-1 bg-green-500 rounded-md shadow-md active:shadow-md hover:scale-110 active:scale-100 text-snow-white text-sm active:shadow-snow-white shadow-flipper-gray"
        onClick={() => {
          setTasks(tasks.filter((task) => task.taskName !== taskName));
        }}
      >
        Mark As Done
      </button>
    </div>
  );
};

export default Task;
