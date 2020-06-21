import React from 'react'
import Dropzone from 'react-dropzone'
import { Icon} from 'antd';
import './FileUpload.css';
import axios from 'axios';
function FileUpload() {

    const dropHandler = (files) => {

        let formData = new formData();

        const config = {
            header : { 'content-type' : 'multipart/form-data'}
        }
        formData.append("files", files[0])


        axios.post('/api/product/image', formData, config)
            .then(response => {
                if(response.data.success){
                    console.log('files save')
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
        </div>
    )
}

export default FileUpload
