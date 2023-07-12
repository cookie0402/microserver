import express from 'express';
import { json } from 'body-parser';
import { currentUseRouter } from "./routes/current-use";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
const app = express();
app.use(json());

app.use(currentUseRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.listen(3000, () => {
  console.log(' listening on port 3000!!!!!!');
});
// import express from "express";
// import { json } from "body-parser";

// const app = express();
// app.use(json());

// app.get("/api/users/currentuser", (req, res) => {
//   res.send("Hi there!");
// });

// app.listen(3000, () => {
//   console.log("Listening on port 3000!!!!!!!!");
// });

