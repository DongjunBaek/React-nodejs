# README.MD

# :tophat:Learn React.js 인프런

### Front-end 기술 스택 성장 및 공부를 하기 위해서 인프런을 활용해 온라인 강의 공부내용을 정리합니다. 기본적인 내용의 큰 변화대로 기록을 할 예정이며 총 5시간 정도 소요되는 강의를 공부합니다. 내용은 쇼핑몰 프로젝트형태로 CRUD를 직접 구현하는 것입니다.

---

강의 주소 :  John Ahn

[따라하며 배우는 노드, 리액트 시리즈 - 쇼핑몰 사이트 만들기 - 인프런](https://www.inflearn.com/course/%EB%94%B0%EB%9D%BC%ED%95%98%EB%A9%B0-%EB%B0%B0%EC%9A%B0%EB%8A%94-%EB%85%B8%EB%93%9C-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%87%BC%ED%95%91%EB%AA%B0/dashboard)

Tag : React, Redux, Node.js, WebApp, MongoDB

프로젝트 환경 설정

1. dev.js -> mongoDB 계정설정 파일 추가 ( key )
2. node_module download ( server, client )
3. node run dev ( server, client 실행 - nodemon을 활용하여 동시에 실행한다.)

:pencil2: Goal

:pencil2: 1. Node.js & Express.js For Server 기능 구현

   - 회원가입 기능
   - 로그인, 로그아웃 기능 ( Cookie로 구현)
   - Auth 인증 기능 구현 ( 인증된 사용자 DB의 TOKEN을 활용 )
   - Bcrypt 라이브러리를 활용한 password 암호화
    
:pencil2: 2. MongoDB 사용

   - MongoDB Atlas를 활용하여 사용하였다.
   - NoSQL basic
    
:pencil2: 3. React.js - Component 구조를 활용한다.

   - Component
   - Redux를 활용한 방식
   - State 와 Props 차이
   - Flux 구조 와 MVC 구조
   - 기본 기능 페이지 구현
    
:pencil2: 4. React Project shopping's Detail

   - Model & Dependencies
       - User

            Data structure : id, password, name, token, email, role..

       - Product

            Data structure : writer, description, price, images, sold, continents, views,

       - dependencies

            bcrypt : password 암호화

            body-parser : request body 변환

            cookie-parser : cookie 변환

            express : web server framework

            jsonwebtoken : 사용자 로그인 상태 점검을 위한 토큰 생성

            mongoose : mongoDB

            multer : file upload

            react-redux : redux

            nodemon : dev tool. auto save reload

   - Add Function - 추가 구현 기능
   <pre><code>
       - 파일 삭제 구현

           client에서 사용자가 업로드 한 파일을 삭제시 실제 서버에서도 삭제하게 하여 저장공간의 낭비를 줄입니다.

           
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
   </code></pre>

   - Components

       * DetailProductPage

        상품 상세 정보

       * Footer

        사이트 하단

       * LandingPage

        시작페이지, 상품 슬라이드쇼

       * LoginPage

        로그인

       * NavBar

        메뉴
    
        + Home
        + Login/Logout
        + Sign-in
        + Sign-up

        * RegisterPage

        회원 가입

        * UploadProductPage

        상품 업로드
