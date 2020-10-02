// MODULES REQUIRED
const express           = require('express');
const path              = require('path');
const createError       = require('http-errors');
const cors              = require('cors')
const cookieParser      = require('cookie-parser');
const logger            = require('morgan');
const mongoose          = require('mongoose');
const expressSession    = require("express-session");
const MongoStore        = require("connect-mongo")(expressSession);
const passport          = require("passport");
const LocalStrategy     = require("passport-local");
const listEndpoints     = require('express-list-endpoints');

// CONNECT TO DATABASE
const Database          = require("./db/database");
Database();

// MODELS
const { Customer, Garage } = require("./models");

// ROUTES TEST
const routerGlobalTest      = require('./routers/routes_test/global');
const routerGarageTest      = require('./routers/routes_test/garage');
const routerCustomerTest    = require('./routers/routes_test/customer');
const routerVehiclesTest    = require('./routers/routes_test/vehicle');
const routerAgendaTest      = require('./routers/routes_test/agenda');
const typeRouterTest        = require('./routers/routes_test/type');

// ROUTES
// const routerGlobal      = require('./routers/global');
// const routerGarage      = require('./routers/garage');
// const routerCustomer    = require('./routers/customer');
// const routerVehicles    = require('./routers/vehicle');
// const routerAgenda      = require('./routers/agenda');
// const usersRouter       = require('./routers/users');
// const typeRouter        = require('./routers/type');

// CONFIG EXPRESS
const app = express();

// APP SETUP
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(logger('dev'));
// app.use(db());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// COOKIE SESSION MANAGEMENT
app.use(expressSession({
  secret              : "merguezparty",
  resave              : false,
  saveUninitialized   : false,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
}));

// ENABLE PASSPORT
app.use(passport.initialize());
app.use(passport.session());

// PASSPORT CONFIGURATION
passport.use(Customer.createStrategy());
passport.use(new LocalStrategy({ usernameField: 'email' }, Customer.authenticate()));
passport.serializeUser(Customer.serializeUser());
passport.deserializeUser(Customer.deserializeUser());
passport.use(Garage.createStrategy());
passport.use(new LocalStrategy({ usernameField: 'email' }, Garage.authenticate()));
passport.serializeUser(Garage.serializeUser());
passport.deserializeUser(Garage.deserializeUser());

// ROAD TEST
app.use("/", [
  routerGlobalTest,
  routerGarageTest,
  routerCustomerTest,
  routerVehiclesTest,
  routerAgendaTest,
  typeRouterTest
]);

// LIST ALL ROUTES
// console.log(listEndpoints(app));

// ERROR HANDLER
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// throw error
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;