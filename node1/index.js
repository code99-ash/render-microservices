const express = require('express')

const PORT = 4000;

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello from NODE 1</h1>')
})

app.listen(PORT, () => console.log(`Node 1 Server running on PORT ${PORT}`))