import React, {useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { getCartItems, removeCartItem } from '../../../_actions/user_actions';
import UserCardBlock from './Sections/UserCardBlock';
//rfce
function CartPage(props) {
    
    const [Total, setTotal] = useState(0)

    const dispatch = useDispatch();

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
    }

    let removeFromCart = (productId) => {
        dispatch(removeCartItem(productId))
        .then(response => {
            console.log(response)
        })
    }
    return (
        <div style={{width : '85%', margin : '3rem auto'}}>
            <h1>My Cart</h1>

            <div>
                <UserCardBlock product={props.user.cartDetail } removeItem={removeFromCart}/>                
            </div>

            <div style = {{marginTop: '3rem'}}>
                <h2>Total Amout : ${Total} </h2>
            </div>
        </div>
    )
}
//rfce
export default CartPage
