const express = require("express");
import { typeAppProps } from "next/app";
const app = express();
const authRoute = require("./route/auth");

app.listen(3001);
