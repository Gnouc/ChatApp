import { Avatar, Button, Typography } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { authentication } from '../firebase/config'

export default function UserInfo() {
    const WrapperStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid rgba(82, 38 , 83);

    .username{
        color: white;
        margin-left: 5px;
    }
    `
  return (
    <WrapperStyled>
        <div>
            <Avatar>A</Avatar>
            <Typography.Text className='username'>ABC</Typography.Text>
        </div>
        <Button ghost onClick={()=>authentication.signOut()}>Đăng Xuất</Button>
    </WrapperStyled>
  )
}
