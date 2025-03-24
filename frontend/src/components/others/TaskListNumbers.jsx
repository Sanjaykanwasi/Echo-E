import React from "react";

const TaskListNumbers = () => {
  return (
    <div className="flex mt-10 screen justify-between gap-5">
      <div className="w-[45%] rounded-2xl py-6 px-9 bg-emerald-500">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="w-[45%] rounded-2xl py-6 px-9 bg-red-400">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="w-[45%] rounded-2xl py-6 px-9 bg-amber-600">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
      <div className="w-[45%] rounded-2xl py-6 px-9 bg-pink-600">
        <h2 className="text-3xl font-semibold">0</h2>
        <h3 className="text-xl font-medium">New Task</h3>
      </div>
    </div>
  );
};

export default TaskListNumbers;
