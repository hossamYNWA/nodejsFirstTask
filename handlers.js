// function to load data from file
const fs = require("fs");
const loadData = (filename) => {
  try {
    const loadedData = fs.readFileSync(filename).toString();
    return JSON.parse(loadedData);
  } catch {
    return [];
  }
};

// function to save data to file
const saveData = (filename, data) => {
  fs.writeFileSync(filename, JSON.stringify(data));
};

// function to add a new user to the list
const addUser = (id, fname, lname, age, city) => {
  const users = loadData("users.json");
  if (users.some((user) => user.id === id)) {
    console.error("this id belongs to another user, please choose another id");
    return;
  }
  users.push({ id, fname, lname, age, city });
  saveData("users.json", users);
};

// function to delete user from the list
const deleteUser = (id) => {
  const currentUsers = loadData("users.json");
  const newList = currentUsers.filter((user) => user.id !== id);
  saveData("users.json", newList);
};

// function to read user data
const readUser = (id) => {
  const users = loadData("users.json");
  const user = users.find((user) => user.id === id);
  if (user) {
    console.log(`ID: ${user.id}`);
    console.log(user);
  } else {
    console.error("user not found");
  }
};

// function to list all users data
const listUsers = () => {
  const users = loadData("users.json");
  users.forEach((user) => {
    console.log(`First Name: ${user.fname}`);
    console.log(`Age: ${user.age}`);
    console.log(`City: ${user.city}`);
  });
};

// export our handler functions

module.exports = {
  addUser,
  deleteUser,
  readUser,
  listUsers,
};
