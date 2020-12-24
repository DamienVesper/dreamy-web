let createError = require(`http-errors`);
let express = require(`express`);
let path = require(`path`);
let cookieParser = require(`cookie-parser`);

let indexRouter = require(`./routes/index`);

let app = express();

// view engine setup
app.set(`views`, path.join(__dirname, `views`));
app.set(`view engine`, `pug`);

app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, `public`)));

app.use(`/`, indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get(`env`) === `development` ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render(`error`);
});

const http = require(`http`);
let server = http.createServer(app).listen(3000, () => console.log(`Webfront bound to 127.0.0.1:3000.`));

module.exports = app;