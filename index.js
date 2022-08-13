//inicio do projeto
//e ai
const express = require('express');
const port = 3000
const app = express();
const routes = express.Router();
routes.all('/', async (req, res) => {
    return res.json("alooha");
});
app.use(routes);

async function run() {
    console.log('comecouu');
    app.listen(port);
}
run().catch(console.error);