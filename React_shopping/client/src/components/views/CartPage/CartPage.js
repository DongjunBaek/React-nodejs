import React, {useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getCartItems, removeCartItem, onSuccessBuy } from '../../../_actions/user_actions';
import UserCardBlock from './Sections/UserCardBlock';
import { Empty } from 'antd';
import Paypal from '../../utils/Paypal';
import { Result, Button } from 'antd';
//rfce
function CartPage(props) {
    
    const [Total, setTotal] = useState(0)

    const dispatch = useDispatch();

    const [ShowTotal, setShowTotal] = useState(false)
    const [ShowSuccess, setShowSuccess] = useState(false)

    useEffect(() => {

        let cartItems = []
        
        //리덕스 User state 안에 cart 안에 상품이 들어있는지 확인
        if(props.user.userData && props.user.userData.cart) {
            if(props.user.userData.cart.length > 0){
                props.user.userData.cart.forEach(item => {
                    cartItems.push(item.id)
                })

                dispatch(getCartItems(cartItems, props.user.userData.cart))
                .then(response => {calculateTotal(response.payload)})
                // console.log(cartItems)
            }
        }
        
    }, [props.user.userData])

    let calculateTotal = (cartDetail) => {
        let total = 0;

        cartDetail.map(item => {
            total += parseInt(item.price,10) * item.quantity
        })

        setTotal(total)
        setShowTotal(true)
    }

    //remove btn click event
    let removeFromCart = (productId) => {
        dispatch(removeCartItem(productId))
        .then(response => {
            //response 는 남은 상품 정보 이다.
            // console.log(response)
            if(response.payload.productInfo.length <= 0){
                setShowTotal(false)
            }
        })
    }

    const transactionSuccess = (data) => {

        //두가지의 정보를 보낸다.
        // Payment collection (Detailed) paypal에서 보내준 데이타
        // User Collection (Simple)     cartDetail
        dispatch(onSuccessBuy({
            paymentData : data,
            cartDetail : props.user.cartDetail
        }))
        .then(response => {
            if(response.payload.success){
                //상품 가격 초기화
                setShowTotal(false)
                setShowSuccess(true)
            } else {

            }
        })
    }



    return (
        <div style={{width : '85%', margin : '3rem auto'}}>
            <h1>My Cart</h1>

            <div>
                <UserCardBlock product={props.user.cartDetail } removeItem={removeFromCart}/>                
            </div>


            




            {/* ShowTotal? Check Ture & False */}
            {ShowTotal ?

                <div style={{ marginTop: '3rem' }}>
                    <h2>Total Amout : ${Total} </h2>
                </div>
                : ShowSuccess ?
                    <Result
                        status="success"
                        title="Successfully Purchased Items"
                    />
                    :
                    <Empty style={{ marginTop: '3rem' }} description={false} />
            }


            {
                ShowTotal &&
                <Paypal
                    total = {Total}
                    onSuccess = {transactionSuccess}    
                />
            }

        </div>
    )
}
//rfce
export default CartPage
