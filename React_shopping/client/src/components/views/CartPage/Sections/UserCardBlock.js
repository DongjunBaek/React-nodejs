import React from 'react'
import './UserCartBlock.css';

function UserCardBlock(props) {


    const renderCartImages = (images) => {
        if(images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }

    const renderItems = () => (        
        props.product && props.product.map((product, index) => (
            <tr key = {index}>
                <td>
                    <img style = {{width : '70px'}} alt = "product"
                    src= {renderCartImages(product.images)} />
                </td>
                <td>
                    {product.quantity} EA
                </td>
                <td>
                    $ {product.price}
                </td>
                <td>
                    <button>
                        remove
                    </button>
                </td>
            </tr>
        ))        
    )



    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Product Image</th>
                        <th>Product Qunatity</th>
                        <th>Product Price</th>
                        <th>Remove from cart</th>
                    </tr>

                </thead>
                <tbody>
                    {renderItems()}

                </tbody>
            </table>
            
            
        </div>
    )
}

export default UserCardBlock
