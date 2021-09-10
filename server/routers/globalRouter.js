import express from "express";
import {home} from "../controllers/globalcontroller";

const globalRouter = express.Router();

globalRouter.get("/", home);

export default globalRouter;  