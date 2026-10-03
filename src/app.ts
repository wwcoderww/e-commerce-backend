import express from "express";
// Variables
const app = express();
// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

export default app;
