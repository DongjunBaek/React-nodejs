import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../_actions/user_action';
import { withRouter} from 'react-router-dom';


function LoginPage(props) {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        //page refesh 방지
        event.preventDefault();


        let body = {
            email : Email,
            password : Password
        }

        dispatch(loginUser(body))
            .then(response => {
                if(response.payload.loginSuccess){
                    props.history.push('/')

                }else {
                    alert('Error')
                }
            })


    }

    return (
        <div className="login-box">
            <form action="" onSubmit= {onSubmitHandler}>
                <ul>
                    <li>
                        <label>Email</label>
                        <input type="email" value={ Email } onChange={onEmailHandler}/>
                    </li>
                    <li>
                        <label>Password</label>
                        <input type="password" value={ Password } onChange={onPasswordHandler} />
                    </li>
                </ul>                
                <button type="submit">
                    Login
                </button>
            </form>
        </div>
    )
}

export default withRouter(LoginPage)
