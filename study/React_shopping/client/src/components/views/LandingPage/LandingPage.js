import React, { useEffect} from 'react'
import { FaCode } from "react-icons/fa";
import axios from "axios";
import './LandingPage.css';
import {Icon, Col, Card, Row} from 'antd';
import Meta from 'antd/lib/card/Meta';
// import ImageSlider from '../../utils/ImageSlider';
// import Checkbox from './Sections/CheckBox';
// import Radiobox from './Sections/RadioBox';
// import SearchFeature from './Sections/SearchFeature';
// import { continents, price } from './Sections/Datas';

function LandingPage() {

    // loaded componet After
    useEffect(() => {

        

        axios.post('/api/product/products')
        .then(response => {
            if(response.data.success){
                console.log(response.data);
            }else {
                alert('상품 정보를 가져오는 것에 실패했습니다.')
            }
        })
    }, [])



    return (
        <div className="landing-container">
            <div className="landing-article-1">
                <h2>Let's Travel Anywhere<Icon type="roket"/></h2>
            </div>

            {/* Filter*/}
            {/*Search*/}
            {/* Cards*/}
            <Card

            >

                <Meta/>
            </Card>

            <div className="landing-article-2">
                <button>More</button>
            </div>
        </div>
    )
}

export default LandingPage
