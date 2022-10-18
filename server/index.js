const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const {getAllHouses, deleteHouse, createHouse, updateHouse} = require('./controller')

app.get('/api/houses', getAllHouses)
app.delete('/api/houses/:id', deleteHouse)
app.post('/api/houses', createHouse)
app.put('/api/houses/:id', updateHouse)

app.listen(4004, () => {
    console.log('Up on 4004!')
})