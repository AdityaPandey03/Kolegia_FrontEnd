const io = require("socket.io")(
  8800,
  {
    cors: {
      origin: "http://localhost:3001",
    },
  },
  () => {
    console.log("server started at port 8800");
  }
);

let users = [];

const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId });
};

const removeUser = (socketId) => {
  users = users.filter((user) => user.socketId !== socketId);
};

const getUser = (userId) => {
  return users.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  //when user is connected
  console.log("socket server connected");

  //getting userid and socketid and mapping them to each other for later use.
  socket.on("addUser", (userId) => {
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
