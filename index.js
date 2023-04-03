const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send(
    '<b>Desafio Levva</b> <br/><br/> RLK 2023 🍷! '
    ))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
