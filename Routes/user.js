const express=require('express')
// const { JsonWebTokenError } = require('jsonwebtoken')
const router=express.Router()
const knex = require('../database/db_connection')

router.get('/home',(req,res)=>{
    res.send({"message":"this is my home page"})
})


router.get('/getAll',(req,res)=>{
   knex
   .select('*')
   .from('userdata')
   .then((data)=>{
       console.log({'userdata':data})
       res.send({'userdata':data})
   }).catch((err)=>{
       res.send(err)
       console.log(err)
   })
})


router.get('/get/:getByid',(req,res)=>{
    var id = req.params.getByid
    // console.log(id)
    knex
    .select('*')
    .from('userdata')
    .where('id',id) 
    .then((data)=>{
        console.log({'userdata':data})
        res.send({'userdata':data})
    }).catch((err)=>{
        res.send(err)
        console.log(err)
    }) 
})


router.post('/register',(req,res)=>{
    knex('userdata')
    .insert(req.body)   
    .then((data)=>{
        jwt.sign(req.body, "abc", )
        console.log({'userdata successfully update':data})
        res.send({'userdata successfully update':data})
    }).catch((err)=>{
        console.log(err)
        res.send(err)
        
    })
})


router.delete('/delete/:id',(req,res)=>{
    knex('userdata')
    .where('id',req.params.id)
    .del()
    .then((data)=>{
        console.log({'userdata successfully deleted':data})
        res.send({'userdata successfully deleted':data})
    }).catch((err)=>{
        res.send(err)
        console.log(err)
    })


})

router.put('/update/:id',(req,res)=>{
    knex('userdata')
    .where('id',req.params.id)
    .update(req.body)
    .then((data)=>{
        console.log({'userdata successfully update':data})
        res.send({'userdata successfully update':data})
    }).catch((err)=>{
        res.send(err)
        console.log(err)
    })
    

})




module.exports=router
