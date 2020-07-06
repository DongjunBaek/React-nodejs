import React, { useEffect, useState} from 'react'
import { FaCode } from "react-icons/fa";
import axios from "axios";
import './LandingPage.css';
import {Icon, Col, Card, Row, Carousel} from 'antd';
import Meta from 'antd/lib/card/Meta';
import ImageSlider from '../../utils/ImageSlider';
import CheckBox from '../LandingPage/Section/CheckBox'
import  {continents, price} from '../LandingPage/Section/Datas'
import Radiobox from './Section/RadioBox';
import SearchFeature from './Section/SearchFeature';
// import { continents, price } from './Sections/Datas';

function LandingPage() {


    const [Products, setProducts] = useState([])
    const [Skip, setSkip] = useState(0)
    const [Limit, setLimit] = useState(8)
    const [PostSize, setPostSize] = useState(0)  
    const [Filters, setFilters] = useState({
        continents : [],
        price: []
    })
    const [SearchTerm, setSearchTerm] = useState("")
    // loaded componet After
    useEffect(() => {

        let body = {
            skip : Skip,
            limit : Limit
        }
        
        getProducts(body)

    }, [])

    const getProducts = (body) => {

        axios.post('/api/product/products', body)
        .then(response => {
            if(response.data.success){
                // console.log(response.data);
                if(body.loadMore){
                    setProducts([...Products, ...response.data.productInfo])
                }else {
                    setProducts(response.data.productInfo)                    
                }
                setPostSize(response.data.PostSize)
            }else {
                alert('상품 정보를 가져오는 것에 실패했습니다.')
            }
        })
    }

    const loadMoreHandler = () => {

        let skip = Skip + Limit

        
        let body = {
            skip : skip,
            limit : Limit,
            loadMore : true
        }

        getProducts(body)

        setSkip(skip)
    }


    const renderCards = Products.map((product, index)=>{

        // console.log('product', product)
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

    const showFilterResults = filters => {

        let body = {
            skip : 0,
            limit : Limit, 
            filters : filters

        }


        getProducts(body)
        //카테고리 선택후 시작부분은 0번부터 보여주기위한 초기화
        setSkip(0)
    }
    const handlePrice = (value) => {
        const data = price;
        let array = [];

        for(let key in data){

            if(data[key]._id === parseInt(value, 10)){
                array = data[key].array;
            }
        }

        return array;
    }
    const handleFilters = (filters, category) => {


        const newFilters = {...Filters}

        newFilters[category] = filters

        if(category === "price"){
            let priceValues = handlePrice(filters)
            newFilters[category] = priceValues
        }

        showFilterResults(newFilters)
        setFilters(newFilters)
    }

    const updateSearchTerm = (newSearchTerm) => {
        
        
        let body = {
            skip : 0,
            limit : Limit,
            filters : Filters,
            searchTerm : newSearchTerm
        }
        
        setSkip(0)
        setSearchTerm(newSearchTerm)
        getProducts(body)
    } 



    return (
        <div className="landing-container">
            <div className="landing-article-1">
                <h2>Let's Travel Anywhere<Icon type="roket"/></h2>
            </div>

            {/* Filter*/}

            <Row gutter={[16, 16]}>
                <Col lg = {12} xs = {24}  >
                    {/* CheckBox */}
                    <CheckBox list={continents} handleFilters={filters => handleFilters(filters, "continents")} />
                
                </Col>
                <Col lg = {12} xs = { 24 }>
                    {/* RadioBox */}
                    <Radiobox list={price} handleFilters={filters => handleFilters(filters, 'price')}></Radiobox>
                </Col>

            </Row>

            

            {/*Search*/}
            <div style={{display:'flex', justifyContent:'flex-end',margin:'1rem auto'}}>
                <SearchFeature refreshFunction={updateSearchTerm}/>
            </div>

            {/* Cards*/}
            {/* gutter 는 간격 */}
            <Row gutter={16}>
                {renderCards}
            </Row>
                
            {PostSize >= Limit &&
            
                <div className="landing-article-2">
                    <button onClick={loadMoreHandler}>More</button>
                </div>
            }
        </div>
    )
}

export default LandingPage
