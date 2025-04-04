const employees = [
  {
    id: 1,
    name: "Alice Smith",
    email: "alice.smith@example.com",
    password: "sanjay",
    taskNumbers: {
      active: 3,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Design Mockups",
        taskDescription: "Create initial design mockups for the new website.",
        taskDate: "2023-10-27",
        category: "Design",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Client Meeting",
        taskDescription:
          "Prepare for and attend client meeting regarding project scope.",
        taskDate: "2023-10-30",
        category: "Meetings",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Research Competitors",
        taskDescription: "Analyze competitor websites and features.",
        taskDate: "2023-10-25",
        category: "Research",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Write Documentation",
        taskDescription: "Document the API endpoints.",
        taskDate: "2023-11-01",
        category: "Documentation",
      },
    ],
  },
  {
    id: 2,
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    password: "sanjay",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Code Review",
        taskDescription: "Review the pull request for the new feature.",
        taskDate: "2023-10-28",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Database Migration",
        taskDescription: "Perform the database migration to the new server.",
        taskDate: "2023-10-26",
        category: "Database",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Bug Fixes",
        taskDescription: "Address the reported bugs in version 1.2.",
        taskDate: "2023-11-02",
        category: "Development",
      },
    ],
  },
  {
    id: 3,
    name: "Charlie Williams",
    email: "charlie.williams@example.com",
    password: "sanjay",
    taskNumbers: {
      active: 3,
      newTask: 1,
      completed: 1,
      failed: 1,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Create Test Cases",
        taskDescription:
          "Develop test cases for the user authentication module.",
        taskDate: "2023-10-29",
        category: "Testing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Deployment to Staging",
        taskDescription: "Deploy the latest build to the staging environment.",
        taskDate: "2023-10-31",
        category: "Deployment",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Performance Testing",
        taskDescription: "Run performance tests on the API.",
        taskDate: "2023-10-27",
        category: "Testing",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Update Documentation",
        taskDescription: "Update the API documentation with the new changes.",
        taskDate: "2023-11-03",
        category: "Documentation",
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        taskTitle: "System Backup",
        taskDescription: "Backup the system data",
        taskDate: "2023-10-20",
        category: "System",
      },
    ],
  },
  {
    id: 4,
    name: "David Brown",
    email: "david.brown@example.com",
    password: "sanjay",
    taskNumbers: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "UI/UX Review",
        taskDescription: "Review the UI/UX designs for user friendliness.",
        taskDate: "2023-11-01",
        category: "Design",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Integrate Payment Gateway",
        taskDescription: "Integrate the new payment gateway into the system.",
        taskDate: "2023-11-04",
        category: "Development",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Prepare Presentation",
        taskDescription: "Prepare a presentation for the stakeholders.",
        taskDate: "2023-10-30",
        category: "Meetings",
      },
    ],
  },
  {
    id: 5,
    name: "Eve Davis",
    email: "eve.davis@example.com",
    password: "sanjay",
    taskNumbers: {
      active: 3,
      newTask: 1,
      completed: 1,
      failed: 0,
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: "Analyze User Feedback",
        taskDescription: "Analyze the user feedback from the latest release.",
        taskDate: "2023-11-02",
        category: "Analysis",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Plan Marketing Campaign",
        taskDescription: "Plan the marketing campaign for the new product.",
        taskDate: "2023-11-05",
        category: "Marketing",
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        taskTitle: "Setup Analytics",
        taskDescription: "Setup analytics for the new webpage.",
        taskDate: "2023-10-28",
        category: "Analytics",
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        taskTitle: "Create social media posts",
        taskDescription: "Create social media posts for the company event",
        taskDate: "2023-11-06",
        category: "Marketing",
      },
    ],
  },
];

const admin = [
  {
    id: 101,
    name: "Sanjay Singh Kanwasi",
    email: "sanjaykanwasi@example.com",
    password: "sanjay",
  },
];

export const setLocalStorage = () => {
  localStorage.setItem("employees", JSON.stringify(employees));
  localStorage.setItem("admin", JSON.stringify(admin));
};

export const getLocalStorage = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));
  const admin = JSON.parse(localStorage.getItem("admin"));

  return { employees, admin };
};
