import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData, setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 mt-20 rounded-2xl">
      <div className="bg-purple-400 mb-2 rounded-lg py-2 px-4 flex justify-between">
        <h2 className="w-1/5 text-xl !text-black font-bold">Employee Name</h2>
        <h2 className="w-1/5 text-xl !text-black font-bold">New Task</h2>
        <h2 className="w-1/5 text-xl !text-black font-bold">Active Task</h2>
        <h2 className="w-1/5 text-xl !text-black font-bold">Completed</h2>
        <h2 className="w-1/5 text-xl !text-black font-bold">Failed</h2>
      </div>
      <div>
        {userData.map((elem, idx) => {
          return (
            <div
              key={idx}
              className="border-2 border-purple-400 mb-2 rounded-lg py-2 px-4 flex justify-between"
            >
              <h2 className="w-1/5 !text-white text-xl font-semibold">
                {elem.name}
              </h2>
              <h2 className="w-1/5 !text-amber-400 text-xl font-semibold">
                {elem.taskNumbers.newTask}
              </h2>
              <h2 className="w-1/5 !text-emerald-900 text-xl font-semibold ">
                {elem.taskNumbers.active}
              </h2>
              <h2 className="w-1/5 !text-blue-700 text-xl font-semibold ">
                {elem.taskNumbers.completed}
              </h2>
              <h2 className="w-1/5 !text-red-700 text-xl font-semibold">
                {elem.taskNumbers.failed}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
