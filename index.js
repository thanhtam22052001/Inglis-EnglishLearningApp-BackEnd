var express = require("express");
var app = express();
var cors = require("cors");
const https = require("https");
const fs = require("fs");
var bodyParser = require("body-parser");
var courseRouter = require("./app/routes/course.router");
var homeRouter = require("./app/routes/home.router");
var rankRouter = require("./app/routes/rank.router");
var userRouter = require("./app/routes/user.router");
var detaillessonRouter = require("./app/routes/detaillesson.router");
var lessonRouter = require("./app/routes/lesson.router");
var folderRouter = require("./app/routes/folder.router");
var vocaRouter = require("./app/routes/vocabulary.router");
var learningRouter = require("./app/routes/learning.router");

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(cors());
app.use(jsonParser);
app.use(urlencodedParser);

// https.createServer(app).listen(3000, () => {
//   console.log("server is runing at port 4000");
// });
app.use("/course", courseRouter);
app.use("/", homeRouter);
app.use("/", rankRouter);
app.use("/user", userRouter);
app.use("/detaillesson", detaillessonRouter);
app.use("/lesson", lessonRouter);
app.use("/folder", folderRouter);
app.use("/vocabulary", vocaRouter);
app.use("/learning", learningRouter);

app.listen(3000, function () {
  console.log("get all course thanh cong");
});
// https
//   .createServer(
//     // Provide the private and public key to the server by reading each
//     // file's content with the readFileSync() method.
//     {
//       key: fs.readFileSync("certs/key.pem"),
//       cert: fs.readFileSync("certs/cert.pem"),
//     },
//     app
//   )
//   .listen(3000, () => {
//     console.log("serever is runing at port 3000");
//   });
