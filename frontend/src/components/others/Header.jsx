import React from "react";

const Header = (props) => {
  const logOutUser = () => {
    localStorage.setItem("loggedInUser", " ");
    props.changeUser("");
  };

  return (
    <div className="flex items-end justify-between">
      <h1 className="text-2xl font-medium">
        Hello <br />
        <span className="text-3xl font-semibold"> sanajy👋</span>
      </h1>
      <button
        onClick={logOutUser}
        className="bg-purple-700 cursor-pointer font-bold rounded-lg text-lg text-white px-5 py-2"
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
