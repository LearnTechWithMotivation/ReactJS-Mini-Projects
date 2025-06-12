import Task from "./Task";

const TaskContainer = ({ tasks, setTasks }) => {
  return (
    <section className="w-[90vw] mt-10 bg-frost-mint/80 orange-ring ">
      <h1 className="text-center bg-penguin-black text-snow-white w-full rounded-t-md mb-5 font-f2 text-3xl font-bold font-stretch-200% ">
        Your Tasks :
      </h1>
      <div className="flex-center flex-col gap-5 my-5">
        {tasks.length != 0 &&
          tasks.map(({ taskName, description }) => {
            return (
              <Task
                taskName={taskName}
                description={description}
                setTasks = {setTasks}
                tasks={tasks}
                key={taskName}
              />
            );
          })}
      </div>
    </section>
  );
};

export default TaskContainer;
