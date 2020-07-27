/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu, Icon, Badge } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";

function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/login");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  const uploadHandler = () => {    
    props.history.push("/product/upload");
    
  }

  const userCart = () => {
    props.history.push("/user/cart");
  }

  if (user.userData && !user.userData.isAuth) {
    return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <a href="/login">Sign in</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="/register">Sign up</a>
        </Menu.Item>
      </Menu>
    )
  } else {
    return (
      <Menu mode={props.mode}>

        <Menu.Item key="history">
          <a href = "/history">History</a>
        </Menu.Item>

        <Menu.Item key="upload">
          <a onClick={uploadHandler}>Upload</a>
        </Menu.Item>

        <Menu.Item key="cart" style={{paddingbottom : 3}}>
          <Badge count={user.userData && user.userData.cart.length}>
            <a onClick={userCart} style= {{marginRight : -22, color:'#667777'}}>
              <Icon type="shopping-cart" style = {{fontSize : 30, marginBottom: 5}}></Icon>
            </a>
          </Badge>
        </Menu.Item>

        <Menu.Item key="logout">
          <a onClick={logoutHandler}>Logout</a>
        </Menu.Item>
      </Menu>
    )
  }
}

export default withRouter(RightMenu);

