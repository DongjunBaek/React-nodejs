import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import { Icon } from 'antd';
import axios from 'axios';
import './FileUpload.css';

function FileUpload() {
    //useState 에 배열선언 : 여러개의 이미지 업로드위해서.
    const [Images, setImages] = useState([])

    const dropHandler = (files) => {

        let formData = new FormData();

        const config = {
            header : { 'content-type' : 'multipart/form-data'}
        }

        formData.append('file', files[0]);        
        // console.log(formData.get('file'));

        
        axios.post('/api/product/image', formData, config)
            .then(response => {
                if(response.data.success){
                    console.log(response.data);

                    setImages([...Images, response.data.filePath])
                }else {
                    alert('file does not save')
                }
            });
    }

    return (
        <div className="dropzone-container">
            <Dropzone onDrop = {dropHandler}>
                {({getRootProps, getInputProps}) => (
                    <section>
                        <div className="FileUploadType1" {...getRootProps()}>
                            <input {...getInputProps()}/>
                            <Icon type="plus" style={{fontSize: '3em'}}/>
                            
                        </div>
                    </section>
                )}

            </Dropzone>

            <div className="loaded-container">
                {Images.map((image, index)=> (
                    <div key={index}>
                        <img className="loaded-img" src={`http://localhost:5000/${image}`} alt=""/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FileUpload
