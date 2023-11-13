const express = require('express')

const PORT = 4001;

const app = express();

app.get('/v2', (req, res) => {
    res.send('<h1>Hello from NODE 2</h1>')
})

app.listen(PORT, () => console.log(`Node 2 Server running on PORT ${PORT}`))