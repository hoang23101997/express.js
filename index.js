const express = require("express");
const studentRouter = require("./router/students")
const teacherRouter = require("./router/teachers")
const authRouter = require("./router/auth")
const profileRouter = require("./router/profile")
const app = express();
//API Container
app.get("/", (req, res) => {
  res.send("Hello");
});

app.use('/students', studentRouter);
app.use('/teachers',teacherRouter );
app.use('/auth',authRouter );
app.use('/profile', profileRouter );
const PORT = 3000;
app.listen(PORT, (err) => {
  if (!err) {
    console.log(`App is running at http://localhost:${PORT}`);
  } else {
    console.log(err);
  }
});
