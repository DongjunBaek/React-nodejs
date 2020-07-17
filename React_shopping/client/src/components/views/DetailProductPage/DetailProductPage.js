import React,{useEffect,useState} from 'react'
import axios from 'axios'
import ProductImage from './Sections/ProductImage';
import ProductInfo from './Sections/ProductInfo';
import {Row, Col} from 'antd';

function DetailProductPage(props) {

    const productId = props.match.params.productId
    //object 형태 {}로 초기화
    const [Product, setProduct] = useState({})

    useEffect(() => {
        
        axios.get(`/api/product/product_by_id?id=${productId}&type=single`)
            .then(response => {
                setProduct(response.data[0])
            })
            .catch(err => alert(err))

    }, [])




    return (
        <div style={{ width: '100%', padding: '3rem 4rem' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <h1>{Product.title}</h1>
        </div>

        <br />
        <br />
        {/* gutter => padding */}
        {/* Row -> 행 Col -> 열  lg-> large::큰화면일때 절반 sm-> small:: 작은화면일때 24(전체)  */}
        <Row gutter={[16, 16]}>
            <Col lg={12} sm={24}>
                {/* {ProductImage} */}
                <ProductImage detail={Product}/>
            </Col>
            <Col lg={12} sm={24}>
                {/* {ProductInfo} */}
                <ProductInfo detail={Product}/>
            </Col>
        </Row>
    </div>
    )
}

export default DetailProductPage
