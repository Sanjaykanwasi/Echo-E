import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [asignTo, setAsignTo] = useState("");
  const [category, setCategory] = useState("");

  const [newTask, setNewTask] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();

    setNewTask({
      taskTitle,
      taskDate,
      taskDescription,
      category,
      active: false,
      newTask: true,
      failed: false,
      completed: false,
    });

    const data = userData;

    const matchedEmployee = data.find((elem) => asignTo === elem.name);
    if (matchedEmployee) {
      matchedEmployee.tasks.push(newTask);
      matchedEmployee.taskNumbers.newTask =
        matchedEmployee.taskNumbers.newTask + 1;
    } else {
      alert("Enter Correct Employee Name");
    }
    setUserData(data);
    console.log(data);

    setAsignTo("");
    setCategory("");
    setTaskDescription("");
    setTaskTitle("");
    setTaskDate("");
  };

  return (
    <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
      <form
        onSubmit={(e) => {
          submitHandler(e);
        }}
        className="flex flex-wrap w-full items-start justify-between"
      >
        <div className="w-1/2">
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Task Title</h3>
            <input
              value={taskTitle}
              required
              onChange={(e) => {
                setTaskTitle(e.target.value);
              }}
              className="text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Eg: Analyze User Feedback"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Date</h3>
            <input
              value={taskDate}
              required
              onChange={(e) => {
                setTaskDate(e.target.value);
              }}
              className="text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="date"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Assigned to</h3>
            <input
              value={asignTo}
              required
              onChange={(e) => {
                setAsignTo(e.target.value);
              }}
              className="text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Employee Name"
            />
          </div>
          <div>
            <h3 className="text-sm text-gray-300 mb-1">Category</h3>
            <input
              value={category}
              required
              onChange={(e) => {
                setCategory(e.target.value);
              }}
              className="text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
              type="text"
              placeholder="Eg: Design, Dev, etc"
            />
          </div>
        </div>

        <div className="w-2/5 flex flex-col items-start">
          <h3 className="text-sm text-gray-300 mb-2">Description</h3>
          <textarea
            value={taskDescription}
            required
            onChange={(e) => {
              setTaskDescription(e.target.value);
            }}
            className="w-full h-52 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
            name=""
            id=""
          ></textarea>
          <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
