import React, { useState} from 'react'
//rfce 로 functional 생성
// import './UploadProductPage.css';
import './UploadProductPage.css';
import {Typography, Button, Form, Input } from 'antd';
import FileUpload from '../../utils/FileUpload';
const {TextArea } = Input;
const Continents = [
    { key : 1, value : "Africa" },
    { key : 2, value : "Europe" },
    { key : 3, value : "Asia" },
    { key : 4, value : "North America" },
    { key : 5, value : "South America" },
    { key : 6, value : "Australia" },
    { key : 7, value : "Antarctica" }
    
]


function UploadProductPage() {

    const [Title, setTitle] = useState("")
    const [Description, setDescription] = useState("")
    const [Price, setPrice] = useState(0)
    const [Continent, setContinent] = useState(1)
    
    const [Images, setImages] = useState([])

    const titleChangeHandler = (event) => {
        setTitle(event.currentTarget.value);
    }
    const descriptionChangeHandler = (event) => {
        setDescription(event.currentTarget.value);
    }

    const priceChangeHander = (event) => {
        setPrice(event.currentTarget.value);
    }

    const continentChangeHandler = (event) => {
        setContinent(event.currentTarget.value)
        // console.log(event.target.value)
        console.log(Continents[event.currentTarget.value-1]);
    }

    return (
        <div className="container-upload">
            <div>
                <h2> 여행 상품 업로드</h2>
            </div>
            <br/>
            <br/>
            <Form>
                {/* DropZone */}
                <FileUpload/>
            <label>Name</label>
            <Input onChange={titleChangeHandler} value={Title}/>
            <br/>
            <br/>
            <label>Description</label>
            <TextArea onChange={descriptionChangeHandler} value = {Description}/>
            <br/>
            <br/>
            <label>Price( $ )</label>
            <Input type="number" onChange= {priceChangeHander} value = {Price}/>
            <br/>
            <br/>
            <select onChange = {continentChangeHandler} value= {Continent}>

                { Continents.map(item => (
                <option key = {item.key} value= { item.key }> {item.value}</option>
                ))}

            </select>
            <br/>
            <br/>
            <br/>
            <Button>
                Regist
            </Button>
            </Form>
        </div>
    )
}

export default UploadProductPage
