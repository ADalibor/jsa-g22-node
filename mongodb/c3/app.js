const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
app.use(express.urlencoded ({ extended: true }));
app.use(express.json());

const logRequest = (req, res, next) => {
  console.log(`${req.method} ${req.url}`); next();
};



app.use(logRequest);

//INSTALIRANJE NA DOTENV // NPM I DOTENV

dotenv.config({path: './config.env'});

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}
)
.then(() => {
 console.log("uspesno se povrzavme");
})
.catch((err) => {
 console.log(err);
});

//console.log(process.env);

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});