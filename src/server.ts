import express from "express";
import "tsconfig-paths/register";
import "dotenv/config";
import { Request, Response } from "express";
import router from "@/routes/index";
import errorHandler from "@/middlewares/errorHandler";
import cors from "cors";

const app = express();

const PORT =
  process.env.NODE_ENV === "development"
    ? process.env.DEV_PORT
    : process.env.PROD_PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello, World!");
});

// Error handling middleware
app.use(errorHandler.notFoundError);
app.use(errorHandler.globalError);

app.listen(PORT, () => {
  console.log(`Server is running on port [http://localhost:${PORT}]`);
});
