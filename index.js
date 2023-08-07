const express = require("express");
const cors = require("cors");
const usersRouter = require("./src/routes/users");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use("/api", usersRouter);

app.listen(port, () =>
  console.log(`auth app listening on http://localhost:${port}`)
);
