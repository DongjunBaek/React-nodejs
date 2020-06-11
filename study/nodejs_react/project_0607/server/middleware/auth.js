const { User } = require("../models/User");


let auth = (req, res, next) => {
    
    
    // 인증 처리

    // client cookie 에서 토큰을 가져온다.
    let token  = req.cookies.x_auth;

    // Decode Token (토큰 복호화) 한 후 유저를 찾는다.
    User.findByToken( token, (err, user) => {
        if(err) throw err;
        if(!user) return res.json({isAuth : false, error : true})

        req.token = token 
        req.user = user
        next();
    })

    // 유저가 있으면 인증 Okay

    // 유저가 없으면 인증 No!


}

module.exports = { auth };