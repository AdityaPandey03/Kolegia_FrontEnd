// Packges Imports
const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

let users = [];

const addUser = (userId, socketId) => {
  !users.some(user => user.userId === userId) && users.push({ userId, socketId });
};

const removeUser = socketId => {
  users = users.filter(user => user.socketId !== socketId);
};

const getUser = userId => {
  return users.find(user => user.userId === userId);
};

io.on("connection", socket => {
  //when user is connected
  console.log("socket server connected");

  //getting userid and socketid and mapping them to each other for later use.
  socket.on("addUser", userId => {
    addUser(userId, socket.id);
    io.emit("getUser", users);
  });

  //send and get private message
  socket.on("sendMessage", ({ senderId, receiverId, text }) => {
    const user = getUser(receiverId);
    io.to(user.socketId).emit("getMessage", {
      senderId,
      receiverId,
      text,
    });
  });

  //when user is disconnected
  socket.on("disconnect", () => {
    console.log("user disconnected");
    removeUser(socket.id);
    io.emit("getUser", users);
  });
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use((req, res, next) => {
  res.send("Not Found");
});

server.listen(process.env.PORT || 8800, () => {
  console.log("listening on *:8800");
});
