import React from 'react';
import {Carousel} from 'antd';
import './ImageSlider.css';

function ImageSlider(props) {
    return (
        <div>
            <Carousel autoplay >

                {props.images.map((image, index)=> (
                    <div key={index}>
                        <img className="carousel-img"
                            src={`http://localhost:5000/${image}`}/>                        
                    </div>
                ))}

            </Carousel>
        </div>
    )
}

export default ImageSlider
