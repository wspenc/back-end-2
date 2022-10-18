const houses = require('./db.json')
let golbalId = 4

module.exports= {
getAllHouses: (req, res) => res.status(200).send(houses),

deleteHouse: (req, res) => {
    let index = housesfindIndex(elem => elem.id === +req.params.id)
    houses.splice(index, 1)
    res.status(200).send(houses)
},

createHouse: (req, res) => {
    let {address, price, imageURL} = req.body
    let newHouse = {
        id: golbalId,
        address,
        price,
        imageURL,
    }
    houses.push(newHouse)
    res.status(200).send(houses)
    global++
},

updateHouse: (req, res) => {
    let {id} = req.params
    let {type} = req.body
    let index = houses.findIndex(elem => +elem.id === +id)

    if (houses[index].price <= 1000 && type === 'minus') {
        houses[index].price = 0
        res.status(200).send(houses)
    } else if (type === 'plus') {
        houses[index].price += 10000
        res.status(200).send(houses)
    } else if (type === 'minus') {
        houses[index].price -= 10000
        res.status(200).send(houses)
    } else {
        res.sendStatus(400)
    }
}
}
 
