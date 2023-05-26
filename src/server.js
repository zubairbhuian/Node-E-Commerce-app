require('dotenv').config()
const app = require("./app");
const POER = process.env.SERVER_PORT || 5000

app.listen(POER,()=>{
    console.log(`Server is runing http://localhost:${POER}/ `);
})