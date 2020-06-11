const express = require('express')
const app = express()
const port = 5000

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser')
const { User } = require("./models/User");
const { auth } = require("./middleware/auth");

const mongoose =  require('mongoose')

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended : true}));
//application/json
app.use(bodyParser.json());
app.use(cookieParser());

mongoose.connect('mongodb+srv://dongjun:dongjun1234@mymongos-wkja4.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser : true, useUnifiedTopology :true, useCreateIndex : true, useFindAndModify : false
}).then(()=> console.log('MongooseDB Connected')).catch(err => console.log(err))
//






app.get('/', (req, res ) => res.send('Hello node Js And Express js 허허'))

//0609 7강
app.post('/api/user/register', (req,res) => {
    
    //회원 가입 할때 필요한 정보들을 client에서 가져오면
    //그것들을 DB에 넣어준다.
    const user = new User(req.body)  

    user.save((err, userInfo) => {
        if(err) return res.json({success : false, err})
        return res.status(200).json({
            success : true
        })
    })


})

app.post('/api/user/login',(req,res) => {
    
    //요청된 이메일을 데이터베이스에서 있는지 찾는다.
    User.findOne({ email: req.body.email }, (err, user) =>{
        if(!user){
            return res.json({
                loginSuccess : false,
                message : "제공된 이메일에 해당하는 유저가 없습니다."
            })
        }
    //요청된 이메일이 데이터베이스에 있다면, 비밀번호가 일치하는지 확인한다.
        user.comparePassword(req.body.password, (err, isMatch)=>{
            if(!isMatch)
            return res.json({ loginSuccess : false, message : "비밀번호가 틀렸습니다."})

            //비밀번호까지 일치한다면 토큰을 생성하기.
            user.generateToken((err,user)=>{
                if(err) return res.status(400).send(err);

                // 토큰을 저장한다.  cookie 나 session, 로컬 스토리지 여기서는 쿠키에 저장.
                res.cookie("x_auth", user.token)
                .status(200)
                .json({loginSuccess : true, userId : user._id})

            })
        })

    })


})



app.get('/api/user/auth', auth,(req,res) =>{

    // 여기 까지 미들웨어를 통과했다는 말은 Authenticaiton이 true 이다.
    res.status(200).json({
        _id : req.user._Id,
        isAdmin : req.user.role === 0 ? false : true,
        isAuth : true,
        email : req.user.email,
        name : req.user.name,
        lastname : req.user.lastname,
        role : req.user.role,
        image : req.user.image

     })
})


app.get('/api/user/logout', auth, (req, res) => {
    User.findOneAndUpdate({ _id : req.user._id}, 
        { token : ""},
        (err, user)=> {
            if(err) return res.json({success : false, err});
            return res.status(200).send({
                success : true
            })
        })
})







// get('root 디렉토리')
app.listen(port, ()=> console.log(`Example app listening  on port ${port}`))

//mongodb+srv://dongjun:<password>@mymongos-wkja4.mongodb.net/<dbname>?retryWrites=true&w=majority