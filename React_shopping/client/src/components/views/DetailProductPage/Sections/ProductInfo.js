import React from 'react'
import {Button, Descriptions } from 'antd';
import { useDispatch} from 'react-redux';
import { addToCart } from '../../../../_actions/user_actions';

function ProductInfo(props) {

    const dispatch = useDispatch();

    const clickHandler = () => {


        //필요한 정보를 Cart 필드에 넣어준다.
        //_id, quantity, date
        //이곳 부터는 axois를 활용하지 않고redux를 활용하여 한다.User 정보는 redux로활용했었기 때문.
        dispatch(addToCart(props.detail._id))
    }



    return (
        <div>
            <Descriptions title="Product Info" bordered>
                <Descriptions.Item label="Price">{props.detail.price}</Descriptions.Item>
                <Descriptions.Item label="Sold">{props.detail.sold}</Descriptions.Item>
                <Descriptions.Item label="View">{props.detail.views}</Descriptions.Item>
                <Descriptions.Item label="Description">{props.detail.description}</Descriptions.Item>
            </Descriptions>


            <br />
            <br />
            <br />

            <div style={{display:'flex', justifyContent:'center'}}>

                <Button size="large" shape="round" type="danger" onClick = {clickHandler}>
                    Add to Cart
                </Button>
            </div>
        </div>
    )
}

export default ProductInfo
