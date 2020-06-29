# Learn React

# Learn React.js 인프런

### Front-end 기술 스택 성장 및 공부를 하기 위해서 인프런을 활용해 온라인 강의 공부내용을 정리합니다.  기본적인 내용의 큰 변화대로 기록을 할 예정이며 총 5시간 정도 소요되는 강의를 공부합니다.  내용은 쇼핑몰 프로젝트형태로 CRUD를 직접 구현하는 것입니다.

---

목표

1. Node.js & Express.js  For Server 기능 구현
    - 회원가입 기능
    - 로그인, 로그아웃 기능 ( Cookie로 구현)
    - Auth  인증 기능 구현 ( 인증된 사용자 DB의 TOKEN을 활용 )
    - Bcrypt 라이브러리를 활용한 password 암호화
2. MongoDB 사용
    - MongoDB Atlas를 활용하여 사용하였다.
    - NoSQL basic
3. React.js
    - Component
    - Redux를 활용한 방식
    - State 와 Props 차이
    - Flux 구조 와 MVC 구조
    - 기본  기능 페이지 구현
4. React Project shopping 
    - Model
        - User

            Data structure : id, password, name, token, email, role..

        - Product

            Data structure : writer, description, price, images, sold, continents, views, 

        - lib-list

            bcrypt : password 암호화

            body-parser : request body 변환

            cookie-parser : cookie 변환

            express : web server framework

            jsonwebtoken : 사용자 로그인 상태 점검을 위한 토큰 생성

            mongoose : mongoDB 

            multer : file upload

            react-redux : redux 

            nodemon : dev tool. auto save reload

    - Add Function
        - 파일 삭제 구현

            client에서 사용자가 업로드 한 파일을 삭제시 실제 서버에서도 삭제하게 하여 저장공간의 낭비를 줄입니다.  

            ```jsx
            //client 요청시
            router.post('/delete',(req, res)=>{
            		//client에서 실제 파일 경로를 body에 저장한뒤 받습니다.
                var fs = require('fs')
            		//import fs -> file System
            		//console.log(req.body.filePath);
                fs.unlink(req.body.filePath, (err)=>{
                    if(err)
                    return res.json({success : false, err})
                    return res.json({success : true})
                })
            })
            ```