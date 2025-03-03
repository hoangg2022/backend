const express=require('express')
const router=express.Router();


router.get('/', (req, res) => {
    res.send('Hello World!')
  })
  
router.get('/hello', (req, res) => {
    res.render('ex')
  })

module.exports=router