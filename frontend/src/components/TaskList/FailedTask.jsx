import React from "react";

const FailedTask = ({ data }) => {
  return (
    <div className="h-full flex-shrink-0 w-[300px] p-5 bg-amber-200 rounded-2xl">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
          {data.category}
        </h3>
        <h4 className="!text-black text-base font-semibold">{data.taskDate}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold !text-black">
        {data.taskTitle}
      </h2>
      <p className="text-base mt-2 !text-black">{data.taskDescription}</p>
      {/* <div className="mt-mt-48">
        <button className="bg-red-400 rounded-3xl w-full font-medium py-1 px-2 text-xs ">
          Failed
        </button>
      </div> */}
    </div>
  );
};

export default FailedTask;
