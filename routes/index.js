const route = require('express').Router()

route.get('/', (req,res) =>{
    res.json({
        message:"E-CommerceAPI"
    })
})



const userRoutes = require('./userRoutes');
route.use('/users',userRoutes);

module.exports = route