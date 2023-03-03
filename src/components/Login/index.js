import React, { useState } from 'react'
import { Row,Col, Button , Typography} from 'antd'
import { authentication } from '../firebase/config'
import { FacebookAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate  } from 'react-router-dom';

export default function Login() {
    const {Title} = Typography
    const fbProvider =  new FacebookAuthProvider();
    const handleFBLogin  = () =>{
        signInWithPopup(fbProvider)
        // .then((res)=>{
        //     console.log(res)
        // })
        // .catch((err) =>{
        //     console.log(err.message);
        // })
    };
  return (
    <div>
        <Row justify='center' style={{height: '800px'}}>
            <Col span={8} style={{height: '80px'}}>
                <Title style={{textAlign: 'center'}} level={3}>Fun Chat</Title>
                <Button style={{width: '100%', marginBottom: 5}}>
                    Đăng nhập bằng Google
                </Button>
                <Button  style={{width: '100%', marginBottom: 5}} onClick= {handleFBLogin}>
                    Đăng nhập bằng FaceBook
                </Button>
            </Col>
        </Row>
    </div>
  )
}
