const express = require('express');
const router = express.Router();
const apiCtl = require('../controllers/apiCtl');


router.get('/cat',apiCtl.getAllCats);
router.get('/cat',apiCtl.getSingleCat);
router.post('/cat',apiCtl.addCat);
router.delete('/cat',apiCtl.delSingleCat());



module.exports = router;
