const express = require('express');
const app = express();
const port = process.env.PORT || 80;


app.get('/', (req, res) => {
    res.send('hellö wörld')
});

app.listen(port, () => {
    console.log(`server is up port ${port}`)
})