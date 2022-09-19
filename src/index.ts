//require the express module
import express from "express";

//require the cors module
import cors from "cors";

//require the router object (and all the defined routes) to be used in this file
import routes from "./routes/routes";

//cretes an instance of an express server
const app = express();

//enable cross origin resource sharing so this API can be used from web-apps on other domains
app.use(cors());

//allow POST and PUT requests to use JSON bodies
app.use(express.json());

//use router object (and all defined routes)
app.use("/", routes);

//define the port
const port = 3000;

//run the server
app.listen(port, () => console.log(`listening on port ${port}`));