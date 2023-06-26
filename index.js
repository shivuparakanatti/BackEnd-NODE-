const express = require('express')
const app = express()
const port = 3040

app.listen(port,function(){
    console.log('server is Succesfully running on',port)
})

const customers = [{
    id:1,name:'joe'
},

{
    id:2,name:'chandler'
},{
    id:3,name:'monica'
}
]


//Get method
app.get('/customer',(req,res)=>{
    res.json(customers)
})

app.get('/customer/:id',(req,res)=>{
    const id = req.params.id
    const cust =customers.filter(customer => {return customer.id == +id})
    res.json(cust)
})

//Post method
app.use(express.json())  // To read the incoming json file

app.post('/customer',(req,res)=>{
    const body = req.body
    res.json(body)
})

//put method

app.put('/customer/:id',(req,res)=>{
    const id = req.params.id
    const body = req.body

    res.json(`Put request sent to server to upadte ${id} `)
})

//delete method

app.delete('/customer/:id',(req,res) => {
const id = req.params.id

res.json('succesfully deleted ' + id)
})