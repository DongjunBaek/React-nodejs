const express = require('express')
const app = express()
const port = 5000

const bodyParser = require('body-parser');
const { User } = require("./models/User");

const mongoose =  require('mongoose')

const config = require('./config/key');

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended : true}));
//application/json
app.use(bodyParser.json());

mongoose.connect(config.mongoURI,{
    useNewUrlParser : true, useUnifiedTopology :true, useCreateIndex : true, useFindAndModify : false
}).then(()=> console.log('MongooseDB Connected')).catch(err => console.log(err))
//






app.get('/', (req, res ) => res.send('Hello node Js And Express js'))

//0609 7강
app.post('/register', (req,res) => {
    
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


// get('root 디렉토리')
app.listen(port, ()=> console.log(`Example app listening  on port ${port}`))

//mongodb+srv://dongjun:<password>@mymongos-wkja4.mongodb.net/<dbname>?retryWrites=true&w=majority