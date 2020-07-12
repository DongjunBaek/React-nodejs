const express = require('express');
const router = express.Router();
const { User } = require("../models/User");

const { auth } = require("../middleware/auth");

//=================================
//             User
//=================================

router.get("/auth", auth, (req, res) => {
    res.status(200).json({
        _id: req.user._id,
        isAdmin: req.user.role === 0 ? false : true,
        isAuth: true,
        email: req.user.email,
        name: req.user.name,
        lastname: req.user.lastname,
        role: req.user.role,
        image: req.user.image,
    });
});

router.post("/register", (req, res) => {

    const user = new User(req.body);

    user.save((err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).json({
            success: true
        });
    });
});

router.post("/login", (req, res) => {
    User.findOne({ email: req.body.email }, (err, user) => {
        if (!user)
            return res.json({
                loginSuccess: false,
                message: "Auth failed, email not found"
            });

        user.comparePassword(req.body.password, (err, isMatch) => {
            if (!isMatch)
                return res.json({ loginSuccess: false, message: "Wrong password" });

            user.generateToken((err, user) => {
                if (err) return res.status(400).send(err);
                res.cookie("w_authExp", user.tokenExp);
                res
                    .cookie("w_auth", user.token)
                    .status(200)
                    .json({
                        loginSuccess: true, userId: user._id
                    });
            });
        });
    });
});

router.get("/logout", auth, (req, res) => {
    User.findOneAndUpdate({ _id: req.user._id }, { token: "", tokenExp: "" }, (err, doc) => {
        if (err) return res.json({ success: false, err });
        return res.status(200).send({
            success: true
        });
    });
});


router.post("/addToCart", auth, (req, res) => {

    // 먼저 User Collection에 있는  해당 유저 정보를 가져오기

    User.findOne({_id : req.user.id},
        (err, userInfo) => {
            // 가져온 정보에서 카트에다 넣으려하는 정보를 가지고 있는지 확인

            let duplicate = false;

            userInfo.cart.forEach((item) => {
                if(item.id === req.body.productId){
                    duplicate = true;
                }
            })
            

            //카트 안에 상품이 이미 있을 경우 수량 +1
            if(duplicate) {
                User.findOneAndUpdate(
                    {_id : req.user._id, "cart.id" : req.body.productId },
                    { $inc : {"cart.$.quantity": 1}},
                    { new :true },
                    (err, userInfo) => {
                        if(err) return res.status(400).json({success : false, err})
                        res.status(200).send(userInfo.cart)
                    }
                )
            } 
            // 없으면 필요한 상품 정보를 가져와서 넣어주기
            else {
                User.findOneAndUpdate(
                    {_id : req.user._id},
                    {
                        $push : {
                            cart : {
                                id : req.body.productId,
                                quantity : 1,
                                date : Date.now()
                            }
                        }
                    }, 
                    {new : true},
                    (err, userInfo) => {
                        if(err) return res.status(400).json({success : false, err})
                        res.status(200).send(userInfo.cart)
                    }
                )
            }
        })

    //상품이 추가된 정보를 redux에 저장하기
});

module.exports = router;
