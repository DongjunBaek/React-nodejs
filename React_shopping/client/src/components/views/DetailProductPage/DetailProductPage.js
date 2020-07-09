import React,{useEffect} from 'react'

import axios from 'axios'

function DetailProductPage(props) {

    const productId = props.match.params.productId

    useEffect(() => {
        
        axios.get(`/api/product/product_by_id?id=${productId}&type=single`)
            .then(response => {
                if(response.data.success){
                    console.log('response.data',response.data)
                } else {
                    alert("Filed Load detail Page")
                }
            })

    }, [])




    return (
        <div>
            DetailProductPage
        </div>
    )
}

export default DetailProductPage
