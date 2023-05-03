const app = require('express')()

app.get('/', (req, res) => {
    res.json({ msg: "Server Running...!" })
})

const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log('Server listening on ' + port)
})