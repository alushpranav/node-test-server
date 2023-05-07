const app = require('express')()

app.get('/', (req, res) => {
    res.json({ msg: "Server Listening...!!!" })
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log('Server listening on ' + port)
})