const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("Hello I have runned my second node server. Automatic restart")
})
const users =[
    {id: 0,
        name: "Razzak",
        email: "razzak@gmail.com",
        phone: '0178888888',
        address: "Dhaka"},
    {id: 1,
        name: "Sabana",
        email: "sabana@gmail.com",
        phone: '0178888888',
        address: "Dhaka"},
    {id: 2,
        name: "sabnoor",
        email: "sabnoor@gmail.com",
        phone: '0178888888',
        address: "Dhaka"},
    {id: 3,
        name: "Suchorita",
        email: "suchorita@gmail.com",
        phone: '0178888888',
        address: "Dhaka"},
    {id: 4,
        name: "Susmita",
        email: "susmita@gmail.com",
        phone: '0178888888',
        address: "Dhaka"},
    {id: 5,
        name: "Soniya",
        email: "soniya@gmail.com",
        phone: '0178888888',
        address: "Dhaka"}
]

app.get('/users', (req,res)=>{
   const search = req.query.search
   //use query parameter
   if(search){
       const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
       res.send(searchResult)
   }
    else{
        res.send(users)
    }
})

//app.METHOD
app.post('/users', (req,res)=>{
    const newUser = req.body
    newUser.id = users.length
    users.push(newUser)
    console.log('hitting the post', req.body)
    res.json(newUser)
    res.send('post got hitted')
})
//dynamic api
app.get('/users/:id',(req,res)=>{
    const id = req.params.id
    const user = users[id]
    res.send(user)
    // console.log(req.params.id)
})
app.get('/fruits', (req,res)=>{
    res.send(['mango', 'oranges', 'banana', 'apple'])
})
app.get('/fruits/mangoes/fazli', (req,res)=>{
    res.send('Yummy Yummy tok marka fazli')
})

app.listen(port,()=>{
    console.log('Listening to port', port)
})