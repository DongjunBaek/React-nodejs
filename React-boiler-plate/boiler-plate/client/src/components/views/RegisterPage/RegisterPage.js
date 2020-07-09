import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../_actions/user_action';
import './RegisterPage.css';
import { withRouter} from 'react-router-dom';
function RegisterPage(props) {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Name, setName] = useState("")
    const [Password, setPassword] = useState("")
    const [ConfirmPassword, setConfirmPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onNameHandler = (event) => {
        setName(event.currentTarget.value)
    }

    const onConfirmPasswordHandler = (event) => {
        setConfirmPassword(event.currentTarget.value)
    }
    const onSubmitHandler = (event) => {
        //page refesh 방지
        event.preventDefault();

        if(Password !== ConfirmPassword) {
            return alert('비밀번호와 비밀번호 확인은 같아야 합니다.')
        }

        let body = {
            email : Email,
            name : Name,
            password : Password
        }

        dispatch(registerUser(body))
            .then(response => {
                if(response.payload.success){
                    props.history.push("/login")
                } else {
                    alert("Falied to sign up")
                }
            })


    }



    return (
        <div className="register-box">
        <form action="" onSubmit= {onSubmitHandler}>
            <ul>
                <li>
                    <label>Email</label>
                    <input type="email" value={ Email } onChange={onEmailHandler}/>
                </li>
                <li>
                    <label>Name</label>
                    <input type="text" value={ Name } onChange={onNameHandler} />
                </li>
                <li>
                    <label>Password</label>
                    <input type="password" value={ Password } onChange={onPasswordHandler} />
                </li>
                <li>
                    <label>Confirm Password</label>
                    <input type="password" value={ ConfirmPassword } onChange={onConfirmPasswordHandler} />
                </li>
            </ul>                
            <button type="submit">
                Sign Up
            </button>
        </form>
    </div>
    )
}

export default withRouter(RegisterPage)
