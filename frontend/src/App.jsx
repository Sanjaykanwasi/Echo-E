import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { AuthContext } from "./context/AuthProvider";

const App = () => {
  const [user, setUser] = useState(null);
  const [loggedInUserData, setLoggedInUserData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useContext(AuthContext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");

    if (loggedInUser) {
      try {
        const userData = JSON.parse(loggedInUser);
        setUser(userData.role);
        setLoggedInUserData(userData.data || null);
      } catch (error) {
        console.error("Error in JSON", error);
        localStorage.removeItem("loggedInUser");
        setUser(null);
        setLoggedInUserData(null);
      }
    } else {
      setUser(null);
      setLoggedInUserData(null);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (email, password) => {
    if (email === "sanjaykanwasi@example.com" && password === "sanjay") {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email === e.email && password === e.password
      );
      if (employee) {
        setUser("employee");
        setLoggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      } else {
        alert("INVALID DETAILS");
      }
    } else {
      alert("INVALID DETAILS");
    }
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user === "admin" ? (
        <AdminDashboard changeUser={setUser} />
      ) : user === "employee" ? (
        <EmployeeDashboard changeUser={setUser} data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
