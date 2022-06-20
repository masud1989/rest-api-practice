const app = require("./app");

const dotenv = require('dotenv');
dotenv.config();

app.listen(process.env.RUNNING_PORT, () => {
    console.log('Server Connection Success from port:' + process.env.RUNNING_PORT);
})