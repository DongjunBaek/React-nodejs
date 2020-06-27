import React, { useEffect, useState} from 'react'
import { FaCode } from "react-icons/fa";
import axios from "axios";
import './LandingPage.css';
import {Icon, Col, Card, Row, Carousel} from 'antd';
import Meta from 'antd/lib/card/Meta';
import ImageSlider from '../../utils/ImageSlider';


// import Checkbox from './Sections/CheckBox';
// import Radiobox from './Sections/RadioBox';
// import SearchFeature from './Sections/SearchFeature';
// import { continents, price } from './Sections/Datas';

function LandingPage() {


    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)

    // loaded componet After
    useEffect(() => {

        let body = {
            skip:Skip,
            limit : Limit
        }
        
        axios.post('/api/product/products', body)
        .then(response => {
            if(response.data.success){
                console.log(response.data);
                setProducts(response.data.productInfo)
            }else {
                alert('상품 정보를 가져오는 것에 실패했습니다.')
            }
        })
    }, [])

    

    const loadMoreHandler = () => {


    }


    const renderCards = Products.map((product, index)=>{

        console.log('product', product)
        return <Col lg={6} md={8} xs={24} key={index}>
            <Card                
                cover={<ImageSlider images={product.images}/>}
            >
                <Meta
                    title = {product.title}
                    description ={`${product.price}`}
                />
            </Card>
        </Col>
    })

    return (
        <div className="landing-container">
            <div className="landing-article-1">
                <h2>Let's Travel Anywhere<Icon type="roket"/></h2>
            </div>

            {/* Filter*/}
            {/*Search*/}
            {/* Cards*/}
            {/* gutter 는 간격 */}
            <Row gutter={16}>
                {renderCards}
            </Row>
                


            <div className="landing-article-2">
                <button onClick={loadMoreHandler}>More</button>
            </div>
        </div>
    )
}

export default LandingPage
