import * as express from "express";
import * as multer from "multer";
import * as cors from "cors";
import * as fs from "fs";
import * as path from "path";


// setup
const DB_NAME = "db.json";
const COLLECTION_NAME = "images";
const UPLOAD_PATH = "uploads";
const upload = multer({ dest: `${UPLOAD_PATH}/` });

// app
const app = express();
app.use(cors());

app.get("/", async (req, res) => {

});

app.listen(3000, function () {
    console.log("listening on port 3000!");
});
