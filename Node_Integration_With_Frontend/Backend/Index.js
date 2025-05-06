const express = require("express");
const cors = require("cors");
const connectDB = require("./Config/Db");
const todoRoutes = require("./Routes/Todo-Routes");

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use("/api/todos", todoRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
