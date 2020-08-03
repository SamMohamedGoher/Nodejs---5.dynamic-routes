// application requirement
const express = require(`express`);
const dotenv = require(`dotenv`);
const bodyParser = require(`body-parser`);
const morgan = require(`morgan`);
const home = require(`./routes/home`);
const message = require(`./routes/message`);
const errorController = require(`./controllers/404`);

// using dotenv
dotenv.config({path: './config/config.env'});

// create an  application
const app = express();

// create listening port
const PORT = process.env.PORT || 3000;

// use static folder
app.use(express.static(`public`));

//using ejs
app.set(`view engine`, `ejs`);
app.set(`views`, `views`);

// using body-parser
app.use(bodyParser.urlencoded({extended: true}));

// using morgan
if(process.env.NODE_ENV === `development`)
app.use(morgan('dev'));

// using pages
app.use(home);
app.use(message);

// setting 404 page
app.use(errorController.get404);

// listening to application
app.listen(PORT, console.log(
  `listening to server in '${process.env.NODE_ENV}' mode on port '${PORT}' ...`
));