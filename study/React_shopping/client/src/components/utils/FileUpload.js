import React, { useState } from 'react'
import Dropzone from 'react-dropzone'
import { Icon } from 'antd';
import axios from 'axios';
import './FileUpload.css';

function FileUpload(props) {
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
                    props.refreshFunction([...Images, response.data.filePath]);
                }else {
                    alert('file does not save')
                }
            });
    }


    const deleteHandler = (image) => {
        const currentIndex = Images.indexOf(image)
        // console.log('currentIndex',currentIndex);

        // 스프레드 문법
        let newImages = [...Images]

        //특정인덱스 위치 부터 몇개를 지우는 지 splice(startIndex,cnt )
        newImages.splice(currentIndex, 1)

        setImages(newImages)
        props.refreshFunction(newImages);
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
                    <div key={index} onClick={()=>deleteHandler(image)}>
                        <img className="loaded-img" src={`http://localhost:5000/${image}`} alt=""/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FileUpload
