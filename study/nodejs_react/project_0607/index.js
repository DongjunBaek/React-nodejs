const express = require('express')

const app = express()

const port = 3000


const mongoose =  require('mongoose')
mongoose.connect('mongodb+srv://dongjun:dongjun1234@mymongos-wkja4.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    useNewUrlParser : true, useUnifiedTopology :true, useCreateIndex : true, useFindAndModify : false
}).then(()=> console.log('MongooseDB Connected')).catch(err => console.log(err))
//


app.get('/', (req, res ) => res.send('Hello node Js And Express js'))
// get('root 디렉토리')
app.listen(port, ()=> console.log(`Example app listening  on port ${port}`))

//mongodb+srv://dongjun:<password>@mymongos-wkja4.mongodb.net/<dbname>?retryWrites=true&w=majority