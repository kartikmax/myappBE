import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import session from "express-session";


import active_callsRoutes from "./routes/active_callsRoute.js";

import call_scriptsRoutes from "./routes/call_scriptsRoute.js";

import callingsRoutes from "./routes/callingsRoute.js";

import customersRoutes from "./routes/customersRoute.js";

import lead_reportsRoutes from "./routes/lead_reportsRoute.js";

import leadsRoutes from "./routes/leadsRoute.js";

import mastersRoutes from "./routes/mastersRoute.js";

import rolesRoutes from "./routes/rolesRoute.js";

import srcalllogsRoutes from "./routes/srcalllogsRoute.js";

import srcallsRoutes from "./routes/srcallsRoute.js";

import user_conpany_mastersRoutes from "./routes/user_conpany_mastersRoute.js";

import usersRoutes from "./routes/usersRoute.js";

import company_productsRoutes from "./routes/company_productsRoute.js";

import UserRolePermissionRoutes from "./routes/UserRolePermissionRoute.js";

import UsersRoleRoutes from "./routes/UsersRoleRoute.js";

import UserPermissionRoutes from "./routes/UserPermissionRoute.js";

import salesRoutes from "./routes/salesRoute.js";

import audio_transcriptsRoutes from "./routes/audio_transcriptsRoute.js";

import transcriptRoutes from "./routes/transcriptRoute.js";




const app = express()
dotenv.config()
app.use(cors());
app.use(morgan("dev"))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(session({
  secret: "techHelps",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
})); 


mongoose.connect("mongodb+srv://kartikmax1:kartikyadav@cluster0.gujnyuq.mongodb.net/test", { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on("error", (err) => {
  console.log(err)
})

db.once("open", () => {
  console.log("Database Connected")
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Backend is running on port ${PORT}`)
})

app.get('/', (req, res) => {
  res.send('Welcome to the API!');
});

app.use("/api/active_calls", active_callsRoutes)
app.use("/api/call_scripts", call_scriptsRoutes)
app.use("/api/callings", callingsRoutes)
app.use("/api/customers", customersRoutes)
app.use("/api/lead_reports", lead_reportsRoutes)
app.use("/api/leads", leadsRoutes)
app.use("/api/masters", mastersRoutes)
app.use("/api/roles", rolesRoutes)
app.use("/api/srcalllogs", srcalllogsRoutes)
app.use("/api/srcalls", srcallsRoutes)
app.use("/api/user_conpany_masters", user_conpany_mastersRoutes)
app.use("/api/users", usersRoutes)
app.use("/api/company_products", company_productsRoutes)
app.use("/api/UserRolePermission", UserRolePermissionRoutes)
app.use("/api/UsersRole", UsersRoleRoutes)
app.use("/api/UserPermission", UserPermissionRoutes)
app.use("/api/sales", salesRoutes)
app.use("/api/audio_transcripts", audio_transcriptsRoutes)
app.use("/api/transcript", transcriptRoutes)

