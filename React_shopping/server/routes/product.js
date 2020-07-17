const express = require('express');
const router = express.Router();
const multer = require('multer');
const { Product} = require('../models/Product')

//=================================
//             Product
//=================================

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`)
    }
})

var upload = multer({ storage: storage }).single("file")

router.post('/image', (req, res) => {
    
    //가져온 이미지를 저장을 해주면 된다.
    upload(req, res, err => {
        if (err) {
            return req.json({ success: false, err })
        }
        return res.json({ success: true, filePath: res.req.file.path, fileName: res.req.file.filename })
    })

})

router.post('/', (req, res) => {
    
    // 받은 정보를 DB 에저장한다.
    const product = new Product(req.body)

    product.save((err)=> {
        if(err) return res.status(400).json({ success : false, err})
        return res.status(200).json({success : true})
    })

})


router.post('/products',(req, res)=>{
    
    //product collection에 담긴 모든 상품 정보 가져오기

    //find() -> 모든 것  find(param) 조건
    //populate -> writer와 관련된 모든 정보를 가져옴.

    let limit = req.body.limit ? parseInt(req.body.limit):20;
    let skip = req.body.skip ? parseInt(req.body.skip):0;
    let term = req.body.searchTerm;

    let findArgs = {};

    for(let key in req.body.filters){

        if(req.body.filters[key].length) {
            //Range mongo DB
            if(key === "price"){

                findArgs[key] = {
                    //Greater than equal
                    $gte : req.body.filters[key][0],
                    //Less than equal
                    $lte : req.body.filters[key][1]
                }

            } else {
                
                findArgs[key] = req.body.filters[key]

            }


        }
    }

    console.log('findArgs', findArgs)
    
    if(term){
        console.log('term ')
         // mongoDB에서 지원. 홈페이지에서 사용법 확인 가능.
        Product.find(findArgs)
        .find( { $text : { $search : term } })
        .populate("writer")
        .skip(skip)
        .limit(limit)
        .exec((err, productInfo)=>{
            if(err) return res.status(400).json({success : false, err})
                        
            return res.status(200).json({success : true, productInfo, PostSize : productInfo.length})
        })

    } else {

        
        Product.find(findArgs)
        .populate("writer")
        .skip(skip)
        .limit(limit)
        .exec((err, productInfo)=>{
            if(err) return res.status(400).json({success : false, err})
            
            
            return res.status(200).json({success : true, productInfo, PostSize : productInfo.length})
        })
    }
    
})

router.post('/delete',(req, res)=>{

    var fs = require('fs')

    console.log(req.body.filePath);
    fs.unlink(req.body.filePath, (err)=>{
        if(err)
        return res.json({success : false, err})
        return res.json({success : true})
    })
})

router.get('/product_by_id', (req, res) => {
    
    //productId를 이용하여 DB에 저장된 정보중 productId와 같은 상품정보를 가져온다.

    let type = req.query.type
    let productIds =req.query.id

    if(type === "array") {
        
        let ids = req.query.id.split(',')
        productIds = ids.map(item => {
            return item
        })
    }
    Product.find({_id : {$in: productIds}})
    .populate('writer')
    .exec((err, product) => {
        if(err) return res.status(400).send(err)
        return res.status(200).send(product)
    })


})



module.exports = router;