const express = require(`express`);
const app = express();

const http = require(`http`);
const path = require(`path`);
const bodyParser = require(`body-parser`);

let server = http.createServer(app);

app.set(`view engine`, `pug`);
app.set(`views`, path.resolve(__dirname, `/views`));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.resolve(__dirname, `assets`)));

app.get(`/`, (req, res, next) => res.render(`index`, { title: `Home` }));
app.get(`/rules`, (req, res, next) => res.render(`index`, { title: `Rules` }));
app.get(`/staff`, (req, res, next) => res.render(`index`, { title: `Staff` }));
app.get(`/faq`, (req, res, next) => res.render(`index`, { title: `FAQ` }));
app.get(`/support`, (req, res, next) => res.render(`index`, { title: `Support` }));

server.listen(3000, () => console.log(`Webfront bound to port 3000.`));