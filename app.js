import express from "express";
import "express-async-errors";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRouter from "./route/authRoute.js";
import mockTestRouter from "./route/mockTestRoute.js";
import courseRouter from "./route/courseRoute.js";
import noteRouter from "./route/noteRoute.js";
import todayMock from "./route/todayMockRoute.js";

import notFoundMiddleware from "./middleware/not-found.js";
import errorHandlerMiddleware from "./middleware/error-handler.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser(process.env.jwtSecret, {}));

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/mocktest", mockTestRouter);
app.use("/api/v1/course", courseRouter);
app.use("/api/v1/note", noteRouter);
app.use("/api/v1/", todayMock);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

export { app };
