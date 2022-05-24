const express = require('express')
const mongoose = require('mongoose')

var router = express.Router()

const Brand =require('../models/brand')

router.get('/',(req,res)=>{

    
    res.render('users/brand/brandAddEdit',{
        viewTitle: 'inserte New brand'
    })
})


router.post('/',(req,res)=>{
    if(req.body._id == '')
    {
        newBrand(req,res)
    }
    else
    {
        updateBrand(req,res)
    }
})

function newBrand(req,res){
    var brand = new Brand()
    brand.name = req.body.name
    brand.description = req.body.description
    brand.save((err)=>{
        if(!err){
            res.redirect('brand/list')
        }
        else
        {
            console.log('errror a guardar los datos ')
        }
    })

}

function updateBrand(req,res){
    Brand.findOneAndUpdate({_id:req.body._id},req.body,{new:true},
        (err) =>{
            if (!err){
                res.redirect('brand/list')
            }else{
                res.render('users/brand/branAddEdit',{
                    viewTitle:'Update brand', 
                    brand: req.body
                })
            }
        }
        )
}

router.get('/list',(req,res)=>{
    Brand.find((err,docs)=>{
        if(!err){
            res.render('users/brand/list',{

                viewTitle: 'brand list',
                list:docs
            })
        }
        else{
            console.log('error al listar las marcar '+err)
        }
    })
})

router.get('/:id',(req,res)=>{
    Brand.findById(req.params.id,(err,doc)=>{
        if(!err){
            res.render('users/brand/brandAddEdit',{
                viewTitle:'Update brands',
                brand:doc
            })
        }
    })

})

router.get('/delete/:id',(req,res)=>{
    Brand.findByIdAndRemove( req.params.id,(err,docs)=>{
        if(!err){
            res.redirect('/brand/list')
        }else{
            console.log('no se pudo eliminar el registro', err)
        }
    })
})
module.exports = router
