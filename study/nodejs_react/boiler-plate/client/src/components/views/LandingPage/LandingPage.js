import React, { useEffect } from 'react'
import axios from 'axios';
import { withRouter} from 'react-router-dom';

function LandingPage(props) {
    
    useEffect(()=>{
        axios.get('/api/hello')
        .then(response => console.log(response))
    }, [])
    

    const onClickHandler = ()=> {
        axios.get('/api/user/logout')
        .then(response => {
            if(response.data.success){
                props.history.push("/login")
            } else {
                alert("logout 실패");
            }
        })
    }


    return (
        <div style={{ display : 'flex', justifyContent : 'center', alignItems: 'center', width: '100% ', height: '100%'}}>
            LandingPage

        <button onClick={onClickHandler}>Logout</button>
        </div> 
    )
}

export default withRouter(LandingPage)
