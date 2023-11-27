const express=require('express');
const app=express();
const router = express.Router();
const { getBook, addBook, updateBook, removeBook } = require('../controllers/restApiController')

// app.use(express.json());
// app.use(express.urlencoded({extended:true}))

router.get('/getbook',getBook);

router.post('/addbook',addBook);

router.put('/updatebook',updateBook);

router.delete('/removebook',removeBook);

module.exports=router;