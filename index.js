const express = require("express");
const cors = require("cors");
const usersRouter = require("./src/routes/users");
const authRouter = require("./src/routes/auth");

// const jwt = require("jsonwebtoken");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/api/token", authRouter);
app.use("/api", usersRouter);

// app.post("/", (req, res) => {
//   console.log(req.body.token);
//   const jwtExample = jwt.verify(req.body.token, "secret");
//   res.send(jwtExample);
// });

app.listen(port, () =>
  console.log(`auth app listening on http://localhost:${port}`)
);
